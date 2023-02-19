import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Desk } from '../components';
import { DeskInfoContextProvider } from '../contexts/deskInfo.context';

export const Layout = () => {
    return (
        <DeskInfoContextProvider deskName='' access='' color='default' isCreated={false}>
            <div className={styles.layout}>
                <Header />
                <Desk />
                <Footer />
            </div>
        </DeskInfoContextProvider>
    );
}

