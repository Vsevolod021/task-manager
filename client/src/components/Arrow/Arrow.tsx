import { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { DropDownList } from '..';

import styles from './Arrow.module.scss';
import cn from 'classnames';
import { setUserName, toggleIsAuth } from '../../store/AuthSlice';

type ArrowProps = {
    className?: string;
};

export const Arrow: FC<ArrowProps> = ({ className }) => {
    const dispatch = useAppDispatch();

    const [isArrowOpened, setIsArrowOpened] = useState<boolean>(false);

    const userName = useAppSelector((state) => state.Auth.userName);
    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const sighOut = () => {
        dispatch(toggleIsAuth(isAuth));
        dispatch(setUserName(''));

        localStorage.clear();
    };

    const menuOptions = [
        { name: userName, path: '/' },
        { name: 'Edit Profile', path: '*' },
        { name: 'Sign out', path: '/login', onClick: sighOut },
    ];

    return (
        <div className={cn(styles.wrapper, className)}>
            <span
                onClick={() => setIsArrowOpened(!isArrowOpened)}
                className={cn(styles.arrow, className, {
                    [styles.arrowOpened]: isArrowOpened,
                })}
            ></span>
            {isArrowOpened && (
                <DropDownList
                    options={menuOptions}
                    className={styles.menuOptions}
                    outline="black"
                />
            )}
        </div>
    );
};
