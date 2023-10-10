import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { getAllDesks } from '../../http/deskAPI';

import { DeskAPIInterface } from '../../interfaces/deskData.interface';

import { Layout } from '../../Layout/Layout';
import { CreateDeskButton, DeskCard } from '../../components';

import styles from './DesksPage.module.scss';

export const DesksPage = () => {
    const [allDesks, setAllDesks] = useState<DeskAPIInterface[]>([]);
    const [isAllDesksLoading, setIsAllDesksLoading] = useState<boolean>(true);

    const userId = useAppSelector((state) => state.Auth.userId);

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (parseInt(path.slice(6)) !== userId) {
            navigate(`/user/${userId}`);
        }

        getAllDesks(userId)
            .then((data) => {
                setAllDesks(data);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsAllDesksLoading(false));
    }, [userId]);

    return (
        <Layout>
            {isAllDesksLoading ? (
                <h1>Loading</h1>
            ) : (
                <main className={styles.wrapper}>
                    {allDesks.length !== 0 ? (
                        <>
                            <h1 className={styles.title}>Все доски</h1>
                            <div className={styles.desks}>
                                {allDesks.map((d) => (
                                    <DeskCard deskData={d} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className={styles.title}>
                                Создайте рабочую доску
                            </h1>
                            <CreateDeskButton size="big" />
                        </>
                    )}
                </main>
            )}
        </Layout>
    );
};
