import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { createSprint } from '../../http/workSprintAPI';

import { getSprintDates } from '../../helpers/helper';

import styles from './SprintCreation.module.scss';
import cn from 'classnames';

type SprintCreationProps = {
    deskId: number;
    className?: string;
    onCreate: () => void;
};

export const SprintCreation: FC<SprintCreationProps> = ({
    deskId,
    className,
    onCreate,
}) => {
    const [startDate, setStartDate] = useState<string>(
        getSprintDates(new Date()).startDate,
    );

    const [endDate, setEndDate] = useState<string>(
        getSprintDates(new Date()).endDate,
    );

    const [sprintName, setSprintName] = useState<string>('');

    const [isSprintNameError, setIsSprintNameError] = useState<boolean>(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const onCreateSprint = async () => {
        try {
            if (sprintName) {
                const sprintData = await createSprint(
                    sprintName,
                    new Date(startDate),
                    new Date(endDate),
                    deskId,
                );

                setSearchParams({
                    deskId: `${deskId}`,
                    sprintId: `${sprintData.id}`,
                });

                onCreate();
            } else {
                setIsSprintNameError(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.sprintInfo}>
                <div className={styles.nameInput}>
                    <input
                        type="text"
                        placeholder="Название спринта"
                        value={sprintName}
                        onChange={(e) => {
                            setSprintName(e.target.value);
                            setIsSprintNameError(false);
                        }}
                    />
                    {isSprintNameError && (
                        <span className={styles.error}>
                            Пожалуйста, укажите название доски
                        </span>
                    )}
                </div>
                <div className={styles.datesContainer}>
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
                <button onClick={onCreateSprint}>Создать спринт</button>
            </div>
        </div>
    );
};
