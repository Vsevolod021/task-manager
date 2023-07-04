import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { toggleIsAuth } from '../../store/isAuthSlice';

import { FormButton, FormInput } from '../../components';
import { Layout } from '../../Layout/Layout';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.isAuth);

    console.log(isAuth);
    // useEffect(() => {
    //     console.log(isAuth);
    // }, [isAuth]);

    const changeIsAuth = () => {
        dispatch(toggleIsAuth());
    };

    return (
        <Layout>
            <main className={styles.wrapper}>
                <div className={styles.form}>
                    <div className={styles.title}>Авторизация</div>
                    <FormInput placeholder="Введите логин" />
                    <FormInput placeholder="Введите пароль" type="password" />
                    <FormButton onClick={changeIsAuth}>Войти</FormButton>
                    <div>{`${isAuth}`}</div>
                </div>
            </main>
        </Layout>
    );
};
