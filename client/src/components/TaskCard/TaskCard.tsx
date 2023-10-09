import { FC, useState, useEffect } from 'react';

import { TaskModal, Modal } from '..';

import { fetchOneTask } from '../../http/taskAPI';

import { TaskExtendedAPIInterface } from '../../interfaces/deskData.interface';

import { setDraggedTask } from '../../store/DraggedTaskSlice';
import { useAppDispatch } from '../../hooks/redux';

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

    const [isDragged, setIsDragged] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchOneTask(taskId).then((data) => setTaskData(data));
    }, [isModalOpened, taskId]);

    return (
        <>
            <div
                className={cn(className, styles.wrapper, {
                    [styles.dragged]: isDragged === true,
                })}
                draggable
                onClick={() => setIsModalOpened(true)}
                onDragStart={() => dispatch(setDraggedTask(taskId))}
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
