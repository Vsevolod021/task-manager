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

    // стейт для проверки Введенного deksId
    const [userDesksIds, setUserDesksIds] = useState<number[]>([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const userId = useAppSelector((data) => data.Auth.userId);

    const deskId = Number(searchParams.get('deskId'));

    useEffect(() => {
        if (userId) {
            getAllDesks(userId)
                .then((data) => {
                    let copy: number[] = [];
                    data.forEach((d) => {
                        copy.push(d.id);
                    });
                    setUserDesksIds(copy);
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
                    }
                    setSprintsData(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setIsSprintsLoading(false));
        }
    }, [userId]);

    return (
        <Layout>
            {isDeskLoading || isAllDesksLoading || isSprintsLoading ? (
                <h1>Loading</h1>
            ) : userDesksIds.includes(deskId) ? (
                <Desk deskData={deskData} sprintsData={sprintsData} />
            ) : (
                <Error errorText="Неправильный id доски" />
            )}
        </Layout>
    );
};
