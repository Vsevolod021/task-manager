import React, { useState } from 'react';

import { Layout } from '../../Layout/Layout';
import styles from './RegistrationPage.module.scss';
import { FormButton, FormInput, LeaveAuth } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { registration } from '../../http/userAPI';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUserId, setUserName, toggleIsAuth } from '../../store/AuthSlice';
import { createWorkspace } from '../../http/workspaceAPI';
import { setWorkspace } from '../../store/WorkspaceSlice';

export const RegistrationPage = () => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.Auth.isAuth);
    const userId = useAppSelector((state) => state.Auth.isAuth);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const authorize = async () => {
        try {
            const userData = await registration(name, email, password);
            dispatch(toggleIsAuth(isAuth));
            dispatch(setUserName(userData?.name));
            dispatch(setUserId(userData?.id));

            const workspaceData = await createWorkspace(
                'light',
                'default',
                userData.id,
            );

            dispatch(
                setWorkspace({
                    theme: workspaceData.theme,
                    color: workspaceData.color,
                }),
            );

            navigate(`/user/${userData?.id}`);
        } catch (e: any) {
            alert(e.response.data.message);
        }
    };

    if (isAuth) {
        navigate(`/user/${userId}`);
    }

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
