import { Layout } from '../../Layout/Layout';

import { Error } from '../../components';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
        <Layout>
            <main>
                <Error errorText="This page doesn't exist" />
            </main>
        </Layout>
    );
};
