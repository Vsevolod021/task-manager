import { Link } from 'react-router-dom';
import { FC } from 'react';

import styles from './TaskCard.module.scss';
import cn from 'classnames';

type TaskCardProps = {
    className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ className }) => {
    return (
        <div
            className={cn(className, styles.wrapper)}
            draggable
            // onDragStart={() => alert('hello')}
        ></div>
    );
};
