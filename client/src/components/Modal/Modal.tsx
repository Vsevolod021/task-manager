import { FC, ReactNode } from 'react';

import closeIcon from '../../assets/close.svg';

import styles from './Modal.module.scss';

type ModalProps = {
    onClose?: () => void;
    children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className={styles.modal}>
            {children}
            <img
                src={closeIcon}
                alt="close"
                className={styles.deskClose}
                onClick={onClose}
            />
        </div>
    );
};
