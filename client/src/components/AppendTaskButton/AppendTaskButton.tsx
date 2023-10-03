import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './AppendTaskbutton.module.scss';
import cn from 'classnames';

interface AppendTaskButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
}

export const AppendTaskButton: FC<AppendTaskButtonProps> = ({
    className,
    ...props
}) => {
    return (
        <button className={cn(className, styles.wrapper)} {...props}>
            <div className={styles.hr} />
            <div className={styles.vr} />
            <span className={styles.text}>Задача</span>
        </button>
    );
};
