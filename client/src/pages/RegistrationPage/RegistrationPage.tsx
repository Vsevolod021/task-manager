import React from 'react';

import { Layout } from '../../Layout/Layout';
import styles from './RegistrationPage.module.scss';
import { FormButton, FormInput, LeaveAuth } from '../../components';
import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
    return (
        <Layout>
            <main className={styles.wrapper}>
                <form className={styles.form}>
                    <div className={styles.title}>Регистрация</div>
                    <div className={styles.isRegistrated}>
                        У вас уже есть аккаунт?
                        <Link to={'/login'}>&nbsp;Войдите</Link>
                    </div>
                    <FormInput placeholder="Введите ваше имя" />
                    <FormInput placeholder="Введите логин" />
                    <FormInput placeholder="Введите пароль" type="password" />
                    <FormButton>Войти</FormButton>
                </form>
                <LeaveAuth />
            </main>
        </Layout>
    );
};
