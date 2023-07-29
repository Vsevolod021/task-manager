import { FC, ReactNode } from 'react';

import closeIcon from '../../assets/close.svg';

import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleIsOpened } from '../../store/ModalSlice';

type ModalProps = {
    children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ children }) => {
    const isModalOpened = useAppSelector((state) => state.Modal.isOpened);

    const dispatch = useAppDispatch();

    return (
        <div className={styles.modal}>
            {children}
            <img
                src={closeIcon}
                alt="close"
                className={styles.deskClose}
                onClick={() => dispatch(toggleIsOpened(isModalOpened))}
            />
        </div>
    );
};
