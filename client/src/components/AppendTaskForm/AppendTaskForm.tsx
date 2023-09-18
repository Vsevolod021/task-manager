import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { useAppSelector } from '../../hooks/redux';

import styles from './AppendTaskForm.module.scss';
import cn from 'classnames';

interface AppendTaskFormProps {
    onCreate: () => void;
    onClose: () => void;
    setTaskTitle: (state: string) => void;
    taskTitle: string;
    className?: string;
}

export const AppendTaskForm: FC<AppendTaskFormProps> = ({
    onCreate,
    onClose,
    setTaskTitle,
    taskTitle,
    className,
    ...props
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    return (
        <div
            className={cn(className, styles.wrapper, styles[deskColor])}
            {...props}
        >
            <textarea
                className={styles.input}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
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
