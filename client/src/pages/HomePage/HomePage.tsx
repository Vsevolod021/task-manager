import { useContext } from 'react';

import { creationConditionContext } from '../../contexts/creationCondition.context';
import { Layout } from '../../Layout/Layout';
import { Append } from '../../components';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <Layout>
            <main className={styles.wrapper}>
                <h1>Welcome to Task Manager</h1>
            </main>
        </Layout>
    );
};
