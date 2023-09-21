import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Layout } from '../../Layout/Layout';
import { Desk, Error } from '../../components';

import { getDesk, getAllDesks } from '../../http/deskAPI';
import { getAllSprints } from '../../http/workSprintAPI';

import { useAppSelector } from '../../hooks/redux';
import {
    DeskAPIInterface,
    WorkSprintAPIInterface,
} from '../../interfaces/deskData.interface';

import styles from './DeskPage.module.scss';

export const DeskPage = () => {
    // Стейты подгрузки данных
    const [isDeskLoading, setIsDeskLoading] = useState<boolean>(true);
    const [isAllDesksLoading, setIsAllDesksLoading] = useState<boolean>(true);
    const [isSprintsLoading, setIsSprintsLoading] = useState<boolean>(true);

    // Стейты данных с сервера
    const [deskData, setDeskData] = useState<DeskAPIInterface>({
        id: 0,
        name: '',
        createdAt: new Date(0),
        updatedAt: new Date(0),
        userId: 0,
    });

    const [sprintsData, setSprintsData] = useState<WorkSprintAPIInterface[]>(
        [],
    );

    // стейт для проверки Введенного deksId и sprintId
    const [userDesksIds, setUserDesksIds] = useState<number[]>([]);
    const [deskSprintsIds, setDeskSprintsIds] = useState<number[]>([]);

    // Search params
    const [searchParams, setSearchParams] = useSearchParams();

    // Id пользователя, доски и спринта
    const userId = useAppSelector((data) => data.Auth.userId);

    const deskId = Number(searchParams.get('deskId'));

    const sprintId = Number(searchParams.get('sprintId'));

    useEffect(() => {
        if (userId) {
            getAllDesks(userId)
                .then((data) => {
                    let deskIdsCopy: number[] = [];
                    data.forEach((d) => {
                        deskIdsCopy.push(d.id);
                    });
                    setUserDesksIds(deskIdsCopy);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsAllDesksLoading(false));

            getDesk(deskId)
                .then((data) => {
                    setDeskData(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsDeskLoading(false));

            getAllSprints(deskId)
                .then((data) => {
                    if (!searchParams.get('sprintId')) {
                        setSearchParams({
                            deskId: `${deskId}`,
                            sprintId: `${data.at(-1)?.id}`,
                        });
                    } else {
                        let sprintsIdsCopy: number[] = [];
                        data.forEach((d) => {
                            sprintsIdsCopy.push(d.id);
                        });
                        setDeskSprintsIds(sprintsIdsCopy);
                    }
                    setSprintsData(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsSprintsLoading(false));
        }
    }, [userId, deskId, searchParams]);

    return (
        <Layout>
            {isDeskLoading || isAllDesksLoading || isSprintsLoading ? (
                <h1>Loading</h1>
            ) : userDesksIds.includes(deskId) &&
              deskSprintsIds.includes(sprintId) ? (
                <Desk deskData={deskData} sprintsData={sprintsData} />
            ) : (
                <Error errorText="Неверно введенные Id" />
            )}
        </Layout>
    );
};
