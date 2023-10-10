import React, { FC } from 'react';

import styles from './ConfirmModal.module.scss';
import cn from 'classnames';

type ConfirmModalProps = {
    type: 'condition' | 'task';
    handleConfirm: () => void;
    handleCancel: () => void;
    className?: string;
};

export const ConfirmModal: FC<ConfirmModalProps> = ({
    type,
    handleConfirm,
    handleCancel,
    className,
}) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            <p className={styles.title}>
                {type === 'condition'
                    ? 'Удалить состояние?'
                    : 'Удалить задачу?'}
            </p>
            <button onClick={handleConfirm} className={styles.confirmBtn}>
                Ок
            </button>
            <button onClick={handleCancel} className={styles.cancelBtn}>
                Отмена
            </button>
        </div>
    );
};
