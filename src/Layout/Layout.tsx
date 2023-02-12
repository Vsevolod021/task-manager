import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main></main>
            <Footer />
        </div>
    );
}

