import React, { useState } from 'react';

import { Layout } from '../../Layout/Layout';
import styles from './RegistrationPage.module.scss';
import { FormButton, FormInput, LeaveAuth } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { registration } from '../../http/userAPI';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUserName, toggleIsAuth } from '../../store/AuthSlice';

export const RegistrationPage = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const authorize = async () => {
        try {
            const data = await registration(name, email, password);
            dispatch(toggleIsAuth(isAuth));
            dispatch(setUserName(data?.name));
            navigate(`/user/${data?.id}`);
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };

    return (
        <Layout>
            <main className={styles.wrapper}>
                <div className={styles.form}>
                    <div className={styles.title}>Регистрация</div>
                    <div className={styles.isRegistrated}>
                        У вас уже есть аккаунт?
                        <Link to={'/login'}>&nbsp;Войдите</Link>
                    </div>
                    <FormInput
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <FormButton onClick={authorize}>
                        Зарегистрироваться
                    </FormButton>
                </div>
                <LeaveAuth />
            </main>
        </Layout>
    );
};
