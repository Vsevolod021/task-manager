import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { getAllDesks } from '../../http/deskAPI';
import { getAllSprints } from '../../http/workSprintAPI';

import { DeskAPIInterface } from '../../interfaces/deskData.interface';

import { Layout } from '../../Layout/Layout';
import { CreateDeskButton } from '../../components';

import avatarIcon from '../../assets/avatar.png';

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
                                    <div
                                        className={styles.deskItem}
                                        key={d.id}
                                        onClick={() =>
                                            navigate(`/desk?deskId=${d.id}`)
                                        }
                                    >
                                        <div className={styles.deskNameTitle}>
                                            Название:
                                        </div>
                                        <div className={styles.deskName}>
                                            {d.name}
                                        </div>
                                        <div
                                            className={styles.participantsTitle}
                                        >
                                            Участники:
                                        </div>
                                        <div className={styles.participants}>
                                            <div
                                                className={
                                                    styles.participantAvatar
                                                }
                                            >
                                                <img
                                                    src={avatarIcon}
                                                    width={36}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.participantAvatar
                                                }
                                            >
                                                <img
                                                    src={avatarIcon}
                                                    width={36}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.participantAvatar
                                                }
                                            >
                                                <img
                                                    src={avatarIcon}
                                                    width={36}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.participantAvatar
                                                }
                                            >
                                                <img
                                                    src={avatarIcon}
                                                    width={36}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
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
