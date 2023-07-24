import { useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '../../Layout/Layout';
import { Desk } from '../../components';

import styles from './DeskPage.module.scss';

export const DeskPage = () => {
    return (
        <Layout>
            <Desk />
        </Layout>
    );
};
