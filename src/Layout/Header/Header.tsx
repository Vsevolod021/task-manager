import styles from './Header.module.scss';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import {
    Append,
    MenuButton,
    Arrow,
    Modal,
    DeskCreation,
} from '../../components';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import closeIcon from '../../assets/close.svg';

type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    const [isCreationOpened, setIsCreationOpened] = useState<boolean>(false);

    useEffect(() => {
        const isCreatinoOpenedData =
            window.localStorage.getItem('is_creation_opened') || '';
        setIsCreationOpened(JSON.parse(isCreatinoOpenedData));
    }, []);

    useEffect(() => {
        window.localStorage.setItem(
            'is_creation_opened',
            JSON.stringify(isCreationOpened),
        );
    }, [isCreationOpened]);

    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <img src={logo} alt="logo" />
                <MenuButton />
                <Append onClick={() => setIsCreationOpened(true)} />
                <div className={styles.avatar}>
                    <img src={avatar} alt="user" width="50px" height="50px" />
                </div>
                <Arrow className={styles.arrow} />
                {isCreationOpened && (
                    <Modal>
                        <DeskCreation
                            className={styles.deskCreation}
                            setIsCreationOpened={setIsCreationOpened}
                        />
                        <img
                            src={closeIcon}
                            alt="close"
                            className={styles.deskClose}
                            onClick={() => setIsCreationOpened(false)}
                        />
                    </Modal>
                )}
            </div>
        </header>
    );
};
