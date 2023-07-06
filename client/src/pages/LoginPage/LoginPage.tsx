import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../http/userAPI';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleIsAuth } from '../../store/AuthSlice';

import { FormButton, FormInput, LeaveAuth } from '../../components';
import { Layout } from '../../Layout/Layout';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const authorize = async () => {
        try {
            const data = await login(email, password);
            console.log(data);
            dispatch(toggleIsAuth(isAuth));
            navigate('/');
        } catch (e: any) {
            alert(e.response.data.message);
        }
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
                    <FormInput
                        placeholder="Введите логин"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        placeholder="Введите пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormButton onClick={authorize}>Войти</FormButton>
                </div>
                <LeaveAuth />
            </main>
        </Layout>
    );
};
