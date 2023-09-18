import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { useAppSelector } from '../../hooks/redux';

import styles from './AppendTaskForm.module.scss';
import cn from 'classnames';

interface AppendTaskFormProps {
    onClose: () => void;
    className?: string;
}

export const AppendTaskForm: FC<AppendTaskFormProps> = ({
    onClose,
    className,
    ...props
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    return (
        <div
            className={cn(className, styles.wrapper, styles[deskColor])}
            {...props}
        >
            <textarea className={styles.input} />
            <button className={styles.createBtn}>Создать</button>
            <button className={styles.closeBtn} onClick={onClose}>
                &#10006;
            </button>
        </div>
    );
};
