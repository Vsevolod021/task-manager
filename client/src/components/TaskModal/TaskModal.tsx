import React, { FC, useState } from 'react';

import { TaskExtendedAPIInterface } from '../../interfaces/deskData.interface';

import { changeTaskInfo } from '../../http/taskAPI';

import pencil from '../../assets/pencil.svg';

import cn from 'classnames';
import styles from './TaskModal.module.scss';

type TaskModalProps = {
    taskData: TaskExtendedAPIInterface;
    className?: string;
};

export const TaskModal: FC<TaskModalProps> = ({ taskData, className }) => {
    const [isTitleInput, setIsTitleinput] = useState<boolean>(false);

    const [isDescriptionInput, setIsDescriptionInput] =
        useState<boolean>(false);

    // Стейты данных о задаче
    const [title, setTitle] = useState<string>(taskData.info.title);

    const [description, setDescription] = useState<string>(
        taskData.info.description,
    );

    const [executor, setExecutor] = useState<string>(taskData.info.executor);

    const [priority, setPriority] = useState<string>(taskData.info.priority);

    // методы
    const onChangeTaskInfo = async () => {
        const taskInfo = await changeTaskInfo(
            title,
            description,
            executor,
            priority,
            taskData.id,
        ).then((data) => {
            console.log(data);
            setTitle(data.title);
            setDescription(data.description);
            setExecutor(data.executor);
            setPriority(data.priority);
        });
    };

    return (
        <div
            className={cn(className, styles.wrapper)}
            onClick={() => {
                onChangeTaskInfo();
                setIsTitleinput(false);
            }}
        >
            <div className={styles.title}>
                {isTitleInput ? (
                    <>
                        <input
                            type="text"
                            className={styles.titleInput}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className={styles.titleInputClose}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsTitleinput(false);
                            }}
                        >
                            &#10006;
                        </button>
                    </>
                ) : (
                    <div
                        className={styles.titleH1}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsTitleinput(true);
                        }}
                    >
                        <h1>{title}</h1>
                        <button>
                            <img src={pencil} alt="" />
                        </button>
                    </div>
                )}
            </div>

            <textarea
                name="description"
                className={styles.description}
            ></textarea>
            <p className={styles.executorsTitle}>Назначено:</p>
            <div className={styles.executorsList}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
            </div>
            <p className={styles.statusTitle}>Состояние:</p>
            <div className={styles.statusValue}></div>
            <p className={styles.priorityTitle}>Приоритет:</p>
            <div className={styles.priorityValue}></div>
        </div>
    );
};
