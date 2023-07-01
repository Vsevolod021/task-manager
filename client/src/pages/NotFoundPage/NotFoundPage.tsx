import { Layout } from '../../Layout/Layout';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
        <Layout>
            <main>
                <h1 className={styles.h1}>This page doesn't exist</h1>
            </main>
        </Layout>
    );
};
