import { ReactNode, FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { creationConditionContext } from '../contexts/creationCondition.context';
import { Desk, DeskCreation, Modal } from '../components';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import cn from 'classnames';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    const { isCreationOpened, setIsCreationOpened } = useContext(
        creationConditionContext,
    );

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
            {isCreationOpened && setIsCreationOpened && (
                <Modal>
                    <DeskCreation className={styles.deskCreation} />
                </Modal>
            )}
        </div>
    );
};
