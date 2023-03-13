import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { Layout } from '../../Layout/Layout';
import styles from './DesksPage.module.scss';

export const DesksPage = () => {
    const { desksInfo } = useContext(DeskInfoContext);

    useEffect(() => {
        console.log(desksInfo);
    }, [desksInfo]);

    return (
        <Layout>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>All desks</h1>
                <div className={styles.desks}>
                    {desksInfo.map((d) => (
                        <Link to={`/desk/${d.id}`}>
                            <div className={styles.deskItem} key={d.id}>
                                <div>{d.name}</div>
                                <div>{d.color}</div>
                                <div>{d.access}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
