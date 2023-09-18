import { FC, useState } from 'react';

import { Modal, DeskCreation } from '..';

import styles from './AppendDesk.module.scss';
import cn from 'classnames';

type AppendDeskProps = {
    className?: string;
    size?: 'small' | 'big';
};

export const AppendDesk: FC<AppendDeskProps> = ({
    className,
    size = 'small',
    ...props
}) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    return (
        <>
            <button
                className={cn(styles.append, className, {
                    [styles.smallBtn]: size === 'small',
                    [styles.bigBtn]: size === 'big',
                })}
                onClick={() => setIsModalOpened(true)}
                {...props}
            >
                <div className={styles.hr} />
                <div className={styles.vr} />
            </button>
            {isModalOpened && (
                <Modal onClose={() => setIsModalOpened(false)}>
                    <DeskCreation />
                </Modal>
            )}
        </>
    );
};
