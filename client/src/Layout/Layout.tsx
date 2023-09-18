import { ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import cn from 'classnames';

import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
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
        </div>
    );
};
