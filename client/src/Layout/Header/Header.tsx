import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Append, MenuButton, Arrow } from '../../components';

import avatar from '../../assets/avatar.png';

import styles from './Header.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux';

type HeaderProps = {
    className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
    const isAuth = useAppSelector((state) => state.Auth.isAuth);
    const userId = useAppSelector((state) => state.Auth.userId);

    const navigate = useNavigate();

    return (
        <header className={cn(styles.header, className)}>
            <div className={styles.headerContent}>
                <Link
                    to={isAuth ? `/user/${userId}` : '/'}
                    className={styles.logo}
                >
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
