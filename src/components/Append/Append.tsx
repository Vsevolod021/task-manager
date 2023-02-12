import cn from 'classnames';
import styles from './Append.module.scss';
import { FC } from 'react';

type AppendProps = {
    className?: string;
    onClick: () => void;
};

export const Append: FC<AppendProps> = ({ className, ...props }) => {
    return (
        <button className={cn(styles.append, className)} {...props}>
            <div className={styles.hr} />
            <div className={styles.vr} />
        </button >
    );
}