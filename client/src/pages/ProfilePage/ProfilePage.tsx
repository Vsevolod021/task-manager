import { Layout } from '../../Layout/Layout';

import { FormButton, FormInput } from '../../components';

import cn from 'classnames';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple', 'default'];

    return (
        <Layout>
            <main className={styles.wrapper}>
                <h1 className={styles.title}>Редактирование профиля</h1>
                <div className={styles.content}>
                    <h2 className={styles.fieldName}>Имя пользователя:</h2>
                    <h2 className={styles.fieldName}>E-mail:</h2>
                    <h2 className={styles.fieldName}>Тема:</h2>
                    <h2 className={styles.fieldName}>Цвет среды:</h2>
                    <FormButton
                        className={styles.saveButton}
                        onClick={() => console.log('hello')}
                    >
                        Сохранить
                    </FormButton>
                    <FormInput
                        placeholder="Имя"
                        type="password"
                        value="Seva"
                        className={styles.nameInput}
                    />
                    <FormInput
                        placeholder="Имейл"
                        type="password"
                        value="seva@taskm.com"
                        className={styles.emailInput}
                    />
                    <select
                        name="theme-type"
                        id="theme-type"
                        className={styles.themeSelect}
                    >
                        <option value="">---</option>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>
                    <div className={styles.color}>
                        {colorsStyles.map((c) => (
                            <button
                                className={cn(styles[c], styles.colorButton)}
                                key={c}
                            ></button>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
};
