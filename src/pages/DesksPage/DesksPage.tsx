import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { Layout } from '../../Layout/Layout';
import styles from './DesksPage.module.scss';

export const DesksPage = () => {
    const { desksInfo } = useContext(DeskInfoContext);
    const navigate = useNavigate();

    return (
        <Layout>
            <main className={styles.wrapper}>
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
            </main>
        </Layout>
    );
};
