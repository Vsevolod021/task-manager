import { useContext, useEffect } from 'react';
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
                        <div className={styles.deskItem} key={d.name}>
                            <div>{d.name}</div>
                            <div>{d.color}</div>
                            <div>{d.access}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
