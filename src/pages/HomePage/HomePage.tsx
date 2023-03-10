import { useContext } from 'react';
import { Append } from '../../components';
import { creationConditionContext } from '../../contexts/creationCondition.context';
import { Layout } from '../../Layout/Layout';
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <Layout>
            <main className={styles.wrapper}>
                <h1 className={styles.title}>Create your desk here</h1>
                <Append size="big" />
            </main>
        </Layout>
    );
};
