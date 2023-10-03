import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './AppendButton.module.scss';
import cn from 'classnames';

interface AppendButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
}

export const AppendButton: FC<AppendButtonProps> = ({
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
