import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { Layout } from '../../Layout/Layout';

import styles from './DesksPage.module.scss';
import { Append } from '../../components';

export const DesksPage = () => {
    const { desksInfo } = useContext(DeskInfoContext);
    const navigate = useNavigate();

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
