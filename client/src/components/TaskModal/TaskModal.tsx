import React, { FC, useState } from 'react';

import { DropDownList } from '..';

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
    // Стейты открытия инпутов
    const [isTitleInput, setIsTitleinput] = useState<boolean>(false);

    const [isDescriptionInput, setIsDescriptionInput] =
        useState<boolean>(false);

    const [isPriorityInput, setIsPriorityInput] = useState<boolean>(false);

    // Стейты данных о задаче
    const [title, setTitle] = useState<string>(taskData.info.title);

    const [description, setDescription] = useState<string>(
        taskData.info.description,
    );

    const [executor, setExecutor] = useState<string>(taskData.info.executor);

    const [priority, setPriority] = useState<string>(taskData.info.priority);

    const setOption = (optionName: string) => {
        setPriority(optionName);
    };

    const priorityOptions = [
        {
            name: 'Очень высокий',
            onClick: () => setOption('Очень высокий'),
        },
        {
            name: 'Высокий',
            onClick: () => setOption('Высокий'),
        },
        {
            name: 'Средний',
            onClick: () => setOption('Средний'),
        },
        {
            name: 'Низкий',
            onClick: () => setOption('Низкий'),
        },
        {
            name: 'Очень низкий',
            onClick: () => setOption('Очень низкий'),
        },
    ];

    // методы
    const onChangeTaskInfo = async () => {
        const taskInfo = await changeTaskInfo(
            title,
            description,
            executor,
            priority,
            taskData.id,
        ).then((data) => console.log(priority));
    };

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {};

    return (
        <div
            className={cn(className, styles.wrapper)}
            onClick={() => {
                console.log('hhh');
                onChangeTaskInfo();
                setIsTitleinput(false);
                setIsDescriptionInput(false);
                setIsPriorityInput(false);
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
                                setTitle(taskData.info.title);
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
            <div className={styles.description}>
                {isDescriptionInput ? (
                    <textarea
                        name="description"
                        onClick={(e) => e.stopPropagation()}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                ) : (
                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDescriptionInput(true);
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>

            <p className={styles.executorsTitle}>Назначено:</p>
            <div className={styles.executorsValue}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
            </div>
            <p className={styles.statusTitle}>Состояние:</p>
            <div className={styles.statusValue}>{taskData.taskConditionId}</div>
            <p className={styles.priorityTitle}>Приоритет:</p>
            <div
                className={styles.priorityValue}
                onClick={(e) => e.stopPropagation()}
            >
                {isPriorityInput ? (
                    <DropDownList
                        outline="black"
                        size="small"
                        options={priorityOptions}
                        className={styles.priorityOption}
                    />
                ) : (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsPriorityInput(true);
                        }}
                        className={styles.prioritySelect}
                    >
                        {priority}
                    </button>
                )}
            </div>
        </div>
    );
};
