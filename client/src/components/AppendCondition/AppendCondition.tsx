import React, { FC, useState } from 'react';

import { useAppSelector } from '../../hooks/redux';

import cn from 'classnames';
import styles from './AppendCondition.module.scss';

type AppendConditionProps = {};

export const AppendCondition: FC<AppendConditionProps> = () => {
    const [appendWidget, setAppendWidget] = useState<'button' | 'form'>(
        'button',
    );

    const [conditionName, setConditionName] = useState<string>('');

    const deskColor = useAppSelector((state) => state.Workspace.color);

    return (
        <div className={cn(styles.wrapper, styles[deskColor])}>
            {appendWidget === 'button' ? (
                <button
                    className={styles.openFormBtn}
                    onClick={() => setAppendWidget('form')}
                >
                    <span className={styles.plus}>+</span>
                    <span className={styles.text}>Состояние</span>
                </button>
            ) : (
                <form className={styles.form}>
                    <textarea
                        className={styles.input}
                        value={conditionName}
                        onChange={(e) => setConditionName(e.target.value)}
                    />
                    <button className={styles.createBtn}>Создать</button>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setAppendWidget('button')}
                    >
                        &#10006;
                    </button>
                </form>
            )}
        </div>
    );
};
