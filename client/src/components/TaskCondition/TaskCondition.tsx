import { FC, useEffect, useState } from 'react';

import { AppendTaskButton, AppendTaskForm, TaskCard } from '..';

import { useAppSelector } from '../../hooks/redux';

import {
    TaskConditionAPIInterface,
    WorkSprintAPIInterface,
    TaskExtendedAPIInterface,
} from '../../interfaces/deskData.interface';
import { fetchAllTasks, createTask } from '../../http/taskAPI';

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
    const [tasks, setTasks] = useState<TaskExtendedAPIInterface[]>([]);

    const [appendTask, setAppendTask] = useState<'button' | 'form'>('button');

    const [taskTitle, setTaskTitle] = useState<string>('');

    const deskColor = useAppSelector((state) => state.Workspace.color);

    useEffect(() => {
        fetchAllTasks(sprintData.id, conditionData.id)
            .then((data) => {
                setTasks(data);
            })
            .catch((err) => console.log(err));
    }, [sprintData, appendTask]);

    const onCreateTask = async () => {
        const taskData = await createTask(
            taskTitle,
            sprintData.id,
            conditionData.id,
        ).then(() => {
            setTaskTitle('');
            setAppendTask('button');
        });
    };

    return (
        <div className={cn(styles.taskCondition, styles[deskColor], className)}>
            <h1 className={styles.conditionTitle}>{conditionData.name}</h1>
            <div className={styles.conditionCards}>
                {tasks.map((t) => (
                    <TaskCard taskData={t} key={t.id} />
                ))}
                {appendTask === 'button' ? (
                    <AppendTaskButton onClick={() => setAppendTask('form')} />
                ) : (
                    <AppendTaskForm
                        onCreate={
                            taskTitle !== ''
                                ? onCreateTask
                                : () => alert('Введите название задачи')
                        }
                        onClose={() => setAppendTask('button')}
                        setTaskTitle={setTaskTitle}
                        taskTitle={taskTitle}
                    />
                )}
            </div>
        </div>
    );
};
