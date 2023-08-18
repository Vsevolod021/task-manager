import { useState } from 'react';

import { Layout } from '../../Layout/Layout';
import { FormButton } from '../../components';

import { changeWorkspace } from '../../http/workspaceAPI';

import { useAppDispatch } from '../../hooks/redux';
import { useAppSelector } from '../../hooks/redux';
import { setWorkspace } from '../../store/WorkspaceSlice';

import cn from 'classnames';
import styles from './WorkspacePage.module.scss';
import { useNavigate } from 'react-router-dom';

export const WorkspacePage = () => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple', 'default'];

    const [theme, setTheme] = useState<string>('light');
    const [color, setColor] = useState<string>('default');

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const userId = useAppSelector((state) => state.Auth.userId);

    const saveWorkspaceData = async () => {
        try {
            const workspaceData = await changeWorkspace(theme, color, userId);
            dispatch(
                setWorkspace({
                    theme: workspaceData.theme,
                    color: workspaceData.color,
                }),
            );
            navigate(`/user/${userId}`);
        } catch (e) {
            console.log(e);
        }
    };

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
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>
                    <div className={styles.color}>
                        {colorsStyles.map((c) => (
                            <button
                                onClick={() => setColor(c)}
                                className={cn(styles[c], styles.colorButton, {
                                    [styles.outlined]: color === c,
                                })}
                                key={c}
                            >
                                {c === 'default' ? 'станд.' : '.'}
                            </button>
                        ))}
                    </div>
                    <FormButton
                        className={styles.saveButton}
                        onClick={saveWorkspaceData}
                    >
                        Сохранить
                    </FormButton>
                </div>
            </main>
        </Layout>
    );
};
