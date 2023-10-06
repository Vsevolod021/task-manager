import { FC } from 'react';

import { useAppSelector } from '../../hooks/redux';

import styles from './AppendForm.module.scss';
import cn from 'classnames';

interface AppendFormProps {
    onCreate: () => void;
    onClose: () => void;
    setTitle: (state: string) => void;
    title: string;
    type: 'task' | 'condition';
    className?: string;
}

export const AppendForm: FC<AppendFormProps> = ({
    onCreate,
    onClose,
    setTitle,
    title,
    type,
    className,
    ...props
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    return (
        <div
            className={cn(className, styles.wrapper, styles[deskColor], {
                [styles.task]: type === 'task',
                [styles.condition]: type === 'condition',
            })}
            {...props}
        >
            <textarea
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className={styles.createBtn} onClick={onCreate}>
                Создать
            </button>
            <button className={styles.closeBtn} onClick={onClose}>
                &#10006;
            </button>
        </div>
    );
};
