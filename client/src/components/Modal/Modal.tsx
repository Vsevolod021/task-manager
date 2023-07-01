import { FC, ReactNode, useContext } from 'react';

import { creationConditionContext } from '../../contexts/creationCondition.context';

import closeIcon from '../../assets/close.svg';

import styles from './Modal.module.scss';

type ModalProps = {
    children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ children }) => {
    const { setIsCreationOpened } = useContext(creationConditionContext);

    return (
        <div className={styles.modal}>
            {children}
            <img
                src={closeIcon}
                alt="close"
                className={styles.deskClose}
                onClick={() =>
                    setIsCreationOpened && setIsCreationOpened(false)
                }
            />
        </div>
    );
};
