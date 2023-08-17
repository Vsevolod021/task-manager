import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDesk } from '../../http/deskAPI';

import styles from './DeskCreation.module.scss';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleIsOpened } from '../../store/ModalSlice';

type DeskCreationProps = {
    className?: string;
};

export const DeskCreation: FC<DeskCreationProps> = ({ className }) => {
    const isModalOpened = useAppSelector((state) => state.Modal.isOpened);
    const userId = useAppSelector((state) => state.Auth.userId);

    const dispatch = useAppDispatch();

    // Стейты значений на инпутах
    const [deskName, setDeskName] = useState<string>('');
    const [access, setAccess] = useState<string>('');

    // Стейты обработок ошибок
    const [isDeskNameError, setIsDeskNameError] = useState<boolean>(false);
    const [isAccessError, setIsAccessError] = useState<boolean>(false);

    const navigate = useNavigate();

    const createDeskOnClick = async () => {
        try {
            if (deskName && access) {
                const deskData = await createDesk(deskName, access, userId);

                dispatch(toggleIsOpened(isModalOpened));
                navigate(`/desk/${deskData.id}`);
            }
            if (!deskName) {
                setIsDeskNameError(true);
            }
            if (!access) {
                setIsAccessError(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.deskInfo)}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Desk name"
                        value={deskName}
                        onChange={(e) => {
                            setDeskName(e.target.value);
                            setIsDeskNameError(false);
                        }}
                    />
                    {isDeskNameError && (
                        <span className={styles.error}>
                            Пожалуйста, укажите название доски
                        </span>
                    )}
                </div>
                <div className={styles.selectContainer}>
                    <select
                        name="access-type"
                        id="access-type"
                        onChange={(e) => {
                            setAccess(e.target.value);
                            setIsAccessError(false);
                        }}
                    >
                        <option value="">---</option>
                        <option value="public">публичная</option>
                        <option value="private">приватная</option>
                    </select>
                    {isAccessError && (
                        <span className={styles.error}>
                            Пожалуйста, укажите тип доступа
                        </span>
                    )}
                </div>
            </div>
            <div className={styles.createButton}>
                <button onClick={createDeskOnClick}>Создать доску</button>
            </div>
        </div>
    );
};
