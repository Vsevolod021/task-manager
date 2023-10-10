import { FC, useEffect, useState } from 'react';

import { AppendButton, AppendForm, TaskCard, Modal, ConfirmModal } from '..';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import { removeDraggedTask } from '../../store/DraggedTaskSlice';

import {
    TaskConditionAPIInterface,
    WorkSprintAPIInterface,
    TaskExtendedAPIInterface,
} from '../../interfaces/deskData.interface';

import {
    fetchAllTasks,
    createTask,
    changeTaskCondition,
} from '../../http/taskAPI';

import { deleteCondition } from '../../http/taskConditionAPI';

import deleteIcon from '../../assets/deleteIcon.svg';

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

    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const [isDeleteWindowOpened, setIsDeleteWindowOpened] =
        useState<boolean>(false);

    // drag'n'drop
    const [isDragOver, setIsDragOver] = useState<boolean>(false);

    // Redux
    const deskColor = useAppSelector((state) => state.Workspace.color);

    const draggedTaskId = useAppSelector((state) => state.DraggedTask.id);

    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchAllTasks(sprintData.id, conditionData.id)
            .then((data) => {
                setTasks(data);
            })
            .catch((err) => console.log(err));
    }, [sprintData, appendTask, draggedTaskId]);

    const onCreateTask = async () => {
        await createTask(taskTitle, sprintData.id, conditionData.id).then(
            () => {
                setAppendTask('button');
            },
        );
    };

    const onChangeCondition = async () => {
        await changeTaskCondition(draggedTaskId, conditionData.id).then(
            (data) => {
                setIsDragOver(false);
                dispatch(removeDraggedTask());
            },
        );
    };

    const handleDeleteButton = async () => {
        await deleteCondition(conditionData.id).then((data) => {
            setIsDeleted(true);
            setIsDeleteWindowOpened(false);
        });
    };

    return (
        <>
            {!isDeleted && (
                <div
                    className={cn(
                        styles.taskCondition,
                        styles[deskColor],
                        {
                            [styles.dragOver]: isDragOver === true,
                        },
                        className,
                    )}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={onChangeCondition}
                >
                    <div className={styles.conditionTitle}>
                        <h1>{conditionData.name}</h1>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDeleteWindowOpened(true);
                            }}
                        >
                            <img src={deleteIcon} alt="" />
                        </button>
                    </div>
                    <div className={styles.conditionCards}>
                        {tasks.map((t) => (
                            <TaskCard taskId={t.id} key={t.id} />
                        ))}
                        {appendTask === 'button' ? (
                            <AppendButton
                                type="task"
                                onClick={() => setAppendTask('form')}
                            />
                        ) : (
                            <AppendForm
                                onCreate={
                                    taskTitle !== ''
                                        ? onCreateTask
                                        : () => alert('Введите название задачи')
                                }
                                onClose={() => setAppendTask('button')}
                                setTitle={setTaskTitle}
                                title={taskTitle}
                                type="task"
                            />
                        )}
                    </div>
                </div>
            )}
            {isDeleteWindowOpened && (
                <Modal onClose={() => setIsDeleteWindowOpened(false)}>
                    <ConfirmModal
                        type="condition"
                        handleConfirm={handleDeleteButton}
                        handleCancel={() => setIsDeleteWindowOpened(false)}
                    />
                </Modal>
            )}
        </>
    );
};
