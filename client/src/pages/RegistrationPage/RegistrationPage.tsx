import React from 'react';

import { Layout } from '../../Layout/Layout';
import styles from './RegistrationPage.module.scss';
import { FormButton, FormInput } from '../../components';

export const RegistrationPage = () => {
    return (
        <Layout>
            <main className={styles.wrapper}>
                <form className={styles.form}>
                    <div className={styles.title}>Регистрация</div>
                    <FormInput placeholder="Введите ваше имя" />
                    <FormInput placeholder="Введите логин" />
                    <FormInput placeholder="Введите пароль" type="password" />
                    <FormButton>Войти</FormButton>
                </form>
            </main>
        </Layout>
    );
};
