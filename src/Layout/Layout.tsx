import styles from './Layout.module.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Desk, DeskCreation, Modal } from '../components';
import { ReactNode, FC, useContext } from 'react';
import { creationConditionContext } from '../contexts/creationCondition.context';

type LayoutProps = {
    children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    const { isCreationOpened, setIsCreationOpened } = useContext(
        creationConditionContext,
    );

    return (
        <div className={styles.layout}>
            <Header />
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
