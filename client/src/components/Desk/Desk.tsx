import { FC, useEffect, useState } from 'react';

import { TaskCondition, AppendTaskButton, TaskCard } from '..';

import {
    DeskAPIInterface,
    TaskConditionAPIInterface,
} from '../../interfaces/deskData.interface';

import { getTaskConditions } from '../../http/taskConditionAPI';

import styles from './Desk.module.scss';
import cn from 'classnames';

type DeskProps = {
    deskData: DeskAPIInterface;
    className?: string;
};

export const Desk: FC<DeskProps> = ({ deskData, className }) => {
    const [taskConditions, setTaskConditions] = useState<
        TaskConditionAPIInterface[]
    >([]);

    useEffect(() => {
        getTaskConditions(deskData.id)
            .then((data) => setTaskConditions(data))
            .catch((err) => console.log(err));
    }, []);

    const appendTask = () => {};

    return (
        <main className={cn(className, styles.deskContainer)}>
            <div className={styles.deskHeader}>
                <h1 className={styles.deskName}>{deskData.name}</h1>
                <select name="" id="">
                    <option value="1">sprint 1</option>
                    <option value="2">sprint 2</option>
                    <option value="3">sprint 3</option>
                    <option value="4">sprint 4</option>
                </select>
                <button>⬤ ⬤ ⬤</button>
            </div>
            <div className={styles.deskFrame}>
                <div className={styles.tasksFrame}>
                    {taskConditions.map((c) => (
                        <TaskCondition conditionInfo={c} key={c.id} />
                    ))}
                </div>
            </div>
        </main>
    );
};
