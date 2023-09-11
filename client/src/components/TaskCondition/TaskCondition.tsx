import { FC, useEffect } from 'react';

import { AppendTaskButton, TaskCard } from '..';

import { useAppSelector } from '../../hooks/redux';

import {
    TaskConditionAPIInterface,
    WorkSprintAPIInterface,
} from '../../interfaces/deskData.interface';
import { fetchAllTasks } from '../../http/taskAPI';

import styles from './TaskCondition.module.scss';
import cn from 'classnames';

type TaskConditionProps = {
    className?: string;
    conditionData: TaskConditionAPIInterface;
    sprintData: WorkSprintAPIInterface;
};

export const TaskCondition: FC<TaskConditionProps> = ({
    className,
    conditionData,
    sprintData,
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    // useEffect(() => {
    //     fetchAllTasks();
    // }, []);

    return (
        <div className={cn(styles.taskCondition, styles[deskColor], className)}>
            <h1 className={styles.conditionTitle}>{conditionData.name}</h1>
            <div className={styles.conditionCards}>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <AppendTaskButton />
            </div>
        </div>
    );
};
