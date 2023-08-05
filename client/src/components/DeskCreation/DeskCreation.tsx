import { FC, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DeskInfoContext } from '../../contexts/deskInfo.context';

import styles from './DeskCreation.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleIsOpened } from '../../store/ModalSlice';

type DeskCreationProps = {
    className?: string;
};

export const DeskCreation: FC<DeskCreationProps> = ({ className }) => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple'];

    const { desksInfo, setDesksInfo } = useContext(DeskInfoContext);

    const isModalOpened = useAppSelector((state) => state.Modal.isOpened);

    const dispatch = useAppDispatch();

    const [deskColor, setDeskColor] = useState<string>('default');
    const [isDeskNameError, setIsDeskNameError] = useState<boolean>(false);
    const [isAccessTypeError, setIsAccessTypeError] = useState<boolean>(false);

    const accessTypeRef = useRef<HTMLSelectElement>(null);
    const deskNameRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const setDeskParams = () => {
        if (deskNameRef.current?.value && accessTypeRef.current?.value) {
            if (setDesksInfo) {
                setDesksInfo([
                    ...desksInfo,
                    {
                        id: desksInfo.length,
                        name: deskNameRef.current?.value,
                        color: deskColor,
                        access: accessTypeRef.current?.value,
                    },
                ]);
                dispatch(toggleIsOpened(isModalOpened));
                navigate(`/desk/${desksInfo.length}`);
            }
        } else {
            if (!deskNameRef.current?.value) {
                setIsDeskNameError(true);
            } else {
                setIsDeskNameError(false);
            }
            if (!accessTypeRef.current?.value) {
                setIsAccessTypeError(true);
            } else {
                setIsAccessTypeError(false);
            }
        }
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.deskInfo, styles[deskColor])}>
                <div className={styles.inputContainer}>
                    <input
                        ref={deskNameRef}
                        type="text"
                        placeholder="Desk name"
                    />
                    {isDeskNameError && (
                        <span className={styles.error}>
                            Пожалуйста, укажите название доски
                        </span>
                    )}
                </div>
                <div className={styles.selectContainer}>
                    <select
                        ref={accessTypeRef}
                        name="access-type"
                        id="access-type"
                    >
                        <option value="">---</option>
                        <option value="public">публичная</option>
                        <option value="private">приватная</option>
                    </select>
                    {isAccessTypeError && (
                        <span className={styles.error}>
                            Пожалуйста, укажите тип доступа
                        </span>
                    )}
                </div>
            </div>
            <div className={styles.createButton}>
                <button className={deskColor} onClick={setDeskParams}>
                    Создать доску
                </button>
            </div>
        </div>
    );
};
