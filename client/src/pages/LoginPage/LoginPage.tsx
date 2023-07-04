import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { toggleIsAuth } from '../../store/AuthSlice';

import { FormButton, FormInput, LeaveAuth } from '../../components';
import { Layout } from '../../Layout/Layout';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const changeIsAuth = () => {
        dispatch(toggleIsAuth(isAuth));
    };

    return (
        <Layout>
            <main className={styles.wrapper}>
                <div className={styles.form}>
                    <div className={styles.title}>Авторизация</div>
                    <div className={styles.isRegistrated}>
                        Вы не зарегестированы?
                        <Link to={'/registration'}>
                            &nbsp;Зарегистрируйтесь
                        </Link>
                    </div>
                    <FormInput placeholder="Введите логин" />
                    <FormInput placeholder="Введите пароль" type="password" />
                    <FormButton onClick={changeIsAuth}>Войти</FormButton>
                </div>
                <LeaveAuth />
            </main>
        </Layout>
    );
};
