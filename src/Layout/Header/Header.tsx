import styles from './Header.module.scss';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Append, MenuButton, Arrow, Modal, DeskCreation } from '../../components';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import closeIcon from '../../assets/close.svg';


type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    const [isCreationOpened, setIsCreationOpened] = useState<boolean>(false);

    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <img src={logo} alt="logo" />
                <MenuButton />
                <Append onClick={() => setIsCreationOpened(true)} />
                <div className={styles.avatar}>
                    <img src={avatar} alt="user" />
                </div>
                <Arrow className={styles.arrow} />
                {isCreationOpened && <Modal>
                    <DeskCreation className={styles.deskCreation} />
                    <img
                        src={closeIcon}
                        alt="close"
                        className={styles.deskClose}
                        onClick={() => setIsCreationOpened(false)} />
                </Modal>}
            </div>
        </header>
    );
}