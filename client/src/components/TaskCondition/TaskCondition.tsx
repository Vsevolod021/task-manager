import { FC, useEffect } from 'react';

import { AppendTaskButton, TaskCard } from '..';

import { useAppSelector } from '../../hooks/redux';

import { TaskConditionAPIInterface } from '../../interfaces/deskData.interface';
import { fetchAllTasks } from '../../http/taskAPI';

import styles from './TaskCondition.module.scss';
import cn from 'classnames';

type TaskConditionProps = {
    className?: string;
    conditionInfo: TaskConditionAPIInterface;
};

export const TaskCondition: FC<TaskConditionProps> = ({
    className,
    conditionInfo,
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    // useEffect(() => {
    //     fetchAllTasks();
    // }, []);

    return (
        <div className={cn(styles.taskCondition, styles[deskColor], className)}>
            <h1 className={styles.conditionTitle}>{conditionInfo.name}</h1>
            <div className={styles.conditionCards}>
                <AppendTaskButton />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
};
