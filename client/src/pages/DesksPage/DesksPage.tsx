import { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';

import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { Layout } from '../../Layout/Layout';

import styles from './DesksPage.module.scss';
import { Append } from '../../components';

export const DesksPage = () => {
    const { desksInfo } = useContext(DeskInfoContext);

    const userId = useAppSelector((state) => state.Auth.userId);

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (parseInt(path.slice(6)) !== userId) {
            navigate(`/user/${userId}`);
        }
    }, [userId]);

    return (
        <Layout>
            <main className={styles.wrapper}>
                {desksInfo.length !== 0 ? (
                    <>
                        <h1 className={styles.title}>All desks</h1>
                        <div className={styles.desks}>
                            {desksInfo.map((d) => (
                                <div
                                    className={styles.deskItem}
                                    key={d.id}
                                    onClick={() => navigate(`/desk/${d.id}`)}
                                >
                                    <div>{d.name}</div>
                                    <div>{d.color}</div>
                                    <div>{d.access}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className={styles.title}>Create your desk here</h1>
                        <Append size="big" />
                    </>
                )}
            </main>
        </Layout>
    );
};
