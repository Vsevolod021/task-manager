import { ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';

import { DeskCreation, Modal } from '../components';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import cn from 'classnames';

import styles from './Layout.module.scss';
import { useAppSelector } from '../hooks/redux';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    const isModalOpened = useAppSelector((state) => state.Modal.isOpened);

    const location = useLocation();

    const isAuthRoute =
        location.pathname === '/registration' || location.pathname === '/login';

    return (
        <div
            className={cn(styles.layout, {
                [styles.authLayout]: isAuthRoute,
            })}
        >
            {isAuthRoute ? <></> : <Header />}
            {children}
            <Footer />
            {isModalOpened && (
                <Modal>
                    <DeskCreation className={styles.deskCreation} />
                </Modal>
            )}
        </div>
    );
};
