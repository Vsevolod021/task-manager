import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../Layout/Layout';
import { Desk, Error } from '../../components';

import { getDesk, getAllDesks } from '../../http/deskAPI';

import { useAppSelector } from '../../hooks/redux';
import { DeskAPIInterface } from '../../interfaces/deskData.interface';

import styles from './DeskPage.module.scss';

export const DeskPage = () => {
    const [isDeskLoading, setIsDeskLoading] = useState<boolean>(true);
    const [isAllDesksLoading, setIsAllDesksLoading] = useState<boolean>(true);

    const [deskData, setDeskData] = useState<DeskAPIInterface>({
        id: 0,
        name: '',
        createdAt: new Date(0),
        updatedAt: new Date(0),
        userId: 0,
    });

    const [userDesksIds, setUserDesksIds] = useState<number[]>([]);

    const { id } = useParams<{ id: string }>();

    const userId = useAppSelector((data) => data.Auth.userId);

    const deskId = Number(id);

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
        }
    }, [userId]);

    return (
        <Layout>
            {isDeskLoading || isAllDesksLoading ? (
                <h1>Loading</h1>
            ) : userDesksIds.includes(deskId) ? (
                <Desk deskData={deskData} />
            ) : (
                <Error errorText="Неправильный id доски" />
            )}
        </Layout>
    );
};
