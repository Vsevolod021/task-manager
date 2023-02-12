import styles from './Modal.module.scss';

import { FC, ReactNode } from 'react';

type ModalProps = {
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    );
}