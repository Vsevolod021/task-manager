import cn from 'classnames';
import styles from './Append.module.scss';
import { FC, useContext } from 'react';
import { creationConditionContext } from '../../contexts/creationCondition.context';

type AppendProps = {
    className?: string;
    size?: 'small' | 'big';
};

export const Append: FC<AppendProps> = ({
    className,
    size = 'small',
    ...props
}) => {
    const { setIsCreationOpened } = useContext(creationConditionContext);

    return (
        <button
            className={cn(styles.append, className, {
                [styles.smallBtn]: size === 'small',
                [styles.bigBtn]: size === 'big',
            })}
            onClick={() => setIsCreationOpened && setIsCreationOpened(true)}
            {...props}
        >
            <div className={styles.hr} />
            <div className={styles.vr} />
        </button>
    );
};
