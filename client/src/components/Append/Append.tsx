import { FC } from 'react';

import styles from './Append.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleIsOpened } from '../../store/ModalSlice';

type AppendProps = {
    className?: string;
    size?: 'small' | 'big';
};

export const Append: FC<AppendProps> = ({
    className,
    size = 'small',
    ...props
}) => {
    const isModalOpened = useAppSelector((state) => state.Modal.isOpened);

    const dispatch = useAppDispatch();

    return (
        <button
            className={cn(styles.append, className, {
                [styles.smallBtn]: size === 'small',
                [styles.bigBtn]: size === 'big',
            })}
            onClick={() => dispatch(toggleIsOpened(isModalOpened))}
            {...props}
        >
            <div className={styles.hr} />
            <div className={styles.vr} />
        </button>
    );
};
