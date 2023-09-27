import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TaskModal, Modal } from '..';

import { fetchOneTask } from '../../http/taskAPI';

import { TaskExtendedAPIInterface } from '../../interfaces/deskData.interface';

import styles from './TaskCard.module.scss';
import cn from 'classnames';

type TaskCardProps = {
    taskId: number;
    className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ taskId, className }) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const [taskData, setTaskData] = useState<TaskExtendedAPIInterface>({
        id: 0,
        createdAt: new Date(0),
        updatedAt: new Date(0),
        workSprintId: 0,
        taskConditionId: 0,
        info: {
            id: 0,
            title: '',
            description: '',
            executor: '',
            priority: '',
            createdAt: new Date(0),
            updatedAt: new Date(0),
            infoId: 0,
            taskId: 0,
        },
    });

    useEffect(() => {
        fetchOneTask(taskId).then((data) => setTaskData(data));
    }, [isModalOpened, taskId]);

    return (
        <>
            <div
                className={cn(className, styles.wrapper)}
                draggable
                onClick={() => setIsModalOpened(true)}
                // onDragStart={() => alert('hello')}
            >
                {taskData.info.title}
            </div>
            {isModalOpened && (
                <Modal onClose={() => setIsModalOpened(false)}>
                    <TaskModal taskData={taskData} />
                </Modal>
            )}
        </>
    );
};
