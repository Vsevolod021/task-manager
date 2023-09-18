import { Link } from 'react-router-dom';
import { FC } from 'react';

import { TaskExtendedAPIInterface } from '../../interfaces/deskData.interface';

import styles from './TaskCard.module.scss';
import cn from 'classnames';

type TaskCardProps = {
    taskData: TaskExtendedAPIInterface;
    className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ taskData, className }) => {
    return (
        <div
            className={cn(className, styles.wrapper)}
            draggable
            // onDragStart={() => alert('hello')}
        >
            {taskData.info.title}
        </div>
    );
};
