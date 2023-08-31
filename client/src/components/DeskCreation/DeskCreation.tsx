import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDesk } from '../../http/deskAPI';
import { createTaskCondition } from '../../http/taskConditionAPI';

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

    // ref div для реализации scrollTo
    const conditionsContainerElem = useRef<HTMLDivElement>(null);

    // Стейты значений на инпутах
    const [deskName, setDeskName] = useState<string>('');
    const [access, setAccess] = useState<string>('');

    const [inputConditions, setInputConditions] = useState<string[]>([
        'To Do',
        'In Process',
        'Done',
    ]);

    // Стейты обработок ошибок
    const [isDeskNameError, setIsDeskNameError] = useState<boolean>(false);
    const [isAccessError, setIsAccessError] = useState<boolean>(false);

    const navigate = useNavigate();

    const onAddCondition = () => {
        setInputConditions([...inputConditions, '']);

        setTimeout(
            () =>
                conditionsContainerElem.current?.scrollTo({
                    top: conditionsContainerElem.current?.scrollHeight,
                    behavior: 'smooth',
                }),
            50,
        );
    };

    const onCreateDesk = async () => {
        try {
            if (deskName && access && inputConditions.length) {
                const deskData = await createDesk(
                    deskName,
                    access,
                    userId,
                    inputConditions,
                );

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
                <h2>Состояния</h2>
                <div
                    className={styles.conditionsContainer}
                    ref={conditionsContainerElem}
                >
                    {inputConditions.map((c, i) => (
                        <div key={i} className={styles.conditionsInput}>
                            <input
                                type="text"
                                placeholder="состояние..."
                                value={c}
                                onChange={(e) => {
                                    setInputConditions([
                                        ...inputConditions.slice(0, i),
                                        e.target.value,
                                        ...inputConditions.slice(i + 1),
                                    ]);
                                }}
                            />
                            <button
                                onClick={() =>
                                    setInputConditions([
                                        ...inputConditions.slice(0, i),
                                        ...inputConditions.slice(i + 1),
                                    ])
                                }
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <button
                        className={styles.addCondition}
                        onClick={onAddCondition}
                    >
                        Добавить
                    </button>
                </div>
            </div>
            <div className={styles.createButton}>
                <button onClick={onCreateDesk}>Создать доску</button>
            </div>
        </div>
    );
};
