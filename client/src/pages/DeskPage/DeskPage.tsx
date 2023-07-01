import { useContext, useEffect } from 'react';

import { DeskInfoContext } from '../../contexts/deskInfo.context';
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
