import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './AppendButton.module.scss';
import cn from 'classnames';

interface AppendButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    type: 'task' | 'condition';
    className?: string;
}

export const AppendButton: FC<AppendButtonProps> = ({
    type,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(className, styles.wrapper, {
                [styles.task]: type === 'task',
                [styles.condition]: type === 'condition',
            })}
            {...props}
        >
            <span className={styles.plus}>+</span>
            <span className={styles.text}>
                {type === 'task' ? 'Задача' : 'Состояние'}
            </span>
        </button>
    );
};
