import { Layout } from '../../Layout/Layout';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <Layout>
            <main className={styles.wrapper}>
                <h1>Добро пожаловать в TASK MANAGER</h1>
            </main>
        </Layout>
    );
};
