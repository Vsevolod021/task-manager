import styles from './Header.module.scss';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import {
    Append,
    MenuButton,
    Arrow,
    Modal,
    DeskCreation,
    DropDownList,
} from '../../components';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import closeIcon from '../../assets/close.svg';
import { useSaveState } from '../../hooks/useSaveState';
import { Link } from 'react-router-dom';

type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    const [isCreationOpened, setIsCreationOpened] = useState<boolean>(false);

    useSaveState('is_creation_opened', isCreationOpened, setIsCreationOpened);

    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
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
