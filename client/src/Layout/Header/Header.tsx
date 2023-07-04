import { FC, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { creationConditionContext } from '../../contexts/creationCondition.context';
import { Append, MenuButton, Arrow } from '../../components';
import { useSaveState } from '../../hooks/useSaveState';

import avatar from '../../assets/avatar.png';

import styles from './Header.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux';

type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const navigate = useNavigate();

    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <Link to="/" className={styles.logo}>
                    <p>
                        TASK
                        <br />
                        MANAGER
                    </p>
                </Link>
                <MenuButton />

                {isAuth ? (
                    <>
                        <Append />
                        <div className={styles.avatar}>
                            <img
                                src={avatar}
                                alt="user"
                                width="50px"
                                height="50px"
                            />
                        </div>
                        <Arrow className={styles.arrow} />
                    </>
                ) : (
                    <button
                        className={styles.signUp}
                        onClick={() => navigate('/login')}
                    >
                        Войти
                    </button>
                )}
            </div>
        </header>
    );
};
