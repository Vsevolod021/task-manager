import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Desk } from '../components';
import { DeskInfoContextProvider } from '../contexts/deskInfo.context';
import { ReactNode, FC } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
