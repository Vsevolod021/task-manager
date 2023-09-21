import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDesk } from '../../http/deskAPI';

import { getSprintDates } from '../../helpers/helper';

import styles from './DeskCreation.module.scss';
import cn from 'classnames';

import { useAppSelector } from '../../hooks/redux';

type DeskCreationProps = {
    className?: string;
};

export const DeskCreation: FC<DeskCreationProps> = ({ className }) => {
    const userId = useAppSelector((state) => state.Auth.userId);

    // ref div для реализации scrollTo
    const conditionsContainerElem = useRef<HTMLDivElement>(null);

    // Стейты значений на инпутах
    const [deskName, setDeskName] = useState<string>('');

    const [taskConditions, setTaskConditions] = useState<string[]>([
        'To Do',
        'In Process',
        'Done',
    ]);

    const [startDate, setStartDate] = useState<string>(
        getSprintDates(new Date()).startDate,
    );

    const [endDate, setEndDate] = useState<string>(
        getSprintDates(new Date()).endDate,
    );

    // Стейты обработок ошибок
    const [isDeskNameError, setIsDeskNameError] = useState<boolean>(false);

    const navigate = useNavigate();

    const onAddCondition = () => {
        setTaskConditions([...taskConditions, '']);

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
            if (deskName && taskConditions.length) {
                const deskData = await createDesk(
                    deskName,
                    userId,
                    taskConditions,
                    new Date(startDate),
                    new Date(endDate),
                );

                navigate(`/desk?deskId=${deskData.id}`);
            }
            if (!deskName) {
                setIsDeskNameError(true);
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
                        placeholder="Название доски"
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

                <h2>Состояния</h2>
                <div
                    className={styles.conditionsContainer}
                    ref={conditionsContainerElem}
                >
                    {taskConditions.map((c, i) => (
                        <div key={i} className={styles.conditionsInput}>
                            <input
                                type="text"
                                placeholder="состояние..."
                                value={c}
                                onChange={(e) => {
                                    setTaskConditions([
                                        ...taskConditions.slice(0, i),
                                        e.target.value,
                                        ...taskConditions.slice(i + 1),
                                    ]);
                                }}
                            />
                            <button
                                onClick={() =>
                                    setTaskConditions([
                                        ...taskConditions.slice(0, i),
                                        ...taskConditions.slice(i + 1),
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
                <h2 className={styles.sprintTitle}>Рабочий спринт</h2>
                <div className={styles.sprintContainer}>
                    <div className={styles.startDate}>
                        <p>Дата начала:</p>
                        <input
                            type="date"
                            name="start_date"
                            id="start_date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className={styles.endDate}>
                        <p>Дата конца:</p>
                        <input
                            type="date"
                            name="end_date"
                            id="end_date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.createButton}>
                <button onClick={onCreateDesk}>Создать доску</button>
            </div>
        </div>
    );
};
