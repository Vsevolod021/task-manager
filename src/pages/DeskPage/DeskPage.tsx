import { useContext, useEffect } from 'react';
import { Desk } from '../../components';
import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { Layout } from '../../Layout/Layout';
import styles from './DeskPage.module.scss';

export const DeskPage = () => {
    return (
        <Layout>
            <Desk />
        </Layout>
    );
};
