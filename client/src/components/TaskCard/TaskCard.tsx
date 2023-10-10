import { FC, useState, useEffect } from 'react';

import { TaskModal, Modal, ConfirmModal } from '..';

import { fetchOneTask, deleteTask } from '../../http/taskAPI';

import { TaskExtendedAPIInterface } from '../../interfaces/deskData.interface';

import { setDraggedTask } from '../../store/DraggedTaskSlice';
import { useAppDispatch } from '../../hooks/redux';

import deleteIcon from '../../assets/deleteIcon.svg';
import avatarIcon from '../../assets/avatar.png';

import styles from './TaskCard.module.scss';
import cn from 'classnames';

type TaskCardProps = {
    taskId: number;
    className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ taskId, className }) => {
    const [isInfoOpened, setIsInfoOpened] = useState<boolean>(false);

    const [isDeletedWindowOpened, setIsDeleteWindowOpened] =
        useState<boolean>(false);

    const [isDeleted, setIsDeleted] = useState<boolean>(false);

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
    }, [isInfoOpened, taskId]);

    const handleDeleteButton = async () => {
        await deleteTask(taskId).then((data) => {
            setIsDeleted(true);
            setIsDeleteWindowOpened(false);
        });
    };

    return (
        <>
            {!isDeleted && (
                <div
                    className={cn(className, styles.wrapper, {
                        [styles.dragged]: isDragged === true,
                    })}
                    draggable
                    onClick={() => setIsInfoOpened(true)}
                    onDragStart={() => dispatch(setDraggedTask(taskId))}
                >
                    <div className={styles.title}>{taskData.info.title}</div>
                    <button
                        className={styles.deleteBtn}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDeleteWindowOpened(true);
                        }}
                    >
                        <img src={deleteIcon} alt="" />
                    </button>
                    <div className={styles.executors}>
                        <div className={styles.avatar}>
                            <img src={avatarIcon} width={27} alt="" />
                        </div>
                        <div className={styles.avatar}>
                            <img src={avatarIcon} width={27} alt="" />
                        </div>
                        <div className={styles.avatar}>
                            <img src={avatarIcon} width={27} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {isInfoOpened && (
                <Modal onClose={() => setIsInfoOpened(false)}>
                    <TaskModal taskData={taskData} />
                </Modal>
            )}
            {isDeletedWindowOpened && (
                <Modal onClose={() => setIsDeleteWindowOpened(false)}>
                    <ConfirmModal
                        type="task"
                        handleConfirm={handleDeleteButton}
                        handleCancel={() => setIsDeleteWindowOpened(false)}
                    />
                </Modal>
            )}
        </>
    );
};
