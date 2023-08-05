import { FC, ReactNode } from 'react';

import styles from './TaskCondition.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../hooks/redux';

type TaskConditionProps = {
    className?: string;
    children: ReactNode;
    title: string;
    id: number;
};

export const TaskCondition: FC<TaskConditionProps> = ({
    className,
    children,
    title,
    id,
}) => {
    const deskColor = useAppSelector((state) => state.Workspace.color);

    return (
        <div className={cn(styles.taskCondition, styles[deskColor], className)}>
            <h1 className={styles.conditionTitle}>{title}</h1>
            <div className={styles.conditionCards}>{children}</div>
        </div>
    );
};
