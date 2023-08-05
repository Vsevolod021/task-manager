import { Layout } from '../../Layout/Layout';

import { FormButton } from '../../components';

import cn from 'classnames';
import styles from './WorkspacePage.module.scss';

export const WorkspacePage = () => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple', 'default'];

    return (
        <Layout>
            <main className={styles.wrapper}>
                <h1 className={styles.title}>Редактирование рабочей среды</h1>
                <div className={styles.content}>
                    <h2 className={styles.fieldName}>Тема:</h2>
                    <h2 className={styles.fieldName}>Цвет среды:</h2>
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
                    <FormButton
                        className={styles.saveButton}
                        onClick={() => console.log('hello')}
                    >
                        Сохранить
                    </FormButton>
                </div>
            </main>
        </Layout>
    );
};
