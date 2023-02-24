import styles from './Header.module.scss';
import { FC, useContext, useState } from 'react';
import cn from 'classnames';
import { Append, MenuButton, Arrow } from '../../components';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import { useSaveState } from '../../hooks/useSaveState';
import { Link } from 'react-router-dom';
import { creationConditionContext } from '../../contexts/creationCondition.context';

type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <MenuButton />
                <Append />
                <div className={styles.avatar}>
                    <img src={avatar} alt="user" width="50px" height="50px" />
                </div>
                <Arrow className={styles.arrow} />
            </div>
        </header>
    );
};
