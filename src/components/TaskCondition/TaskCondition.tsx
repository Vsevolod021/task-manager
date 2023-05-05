import { FC, useContext } from 'react';

import { DeskInfoContext } from '../../contexts/deskInfo.context';

import styles from './TaskCondition.module.scss';
import cn from 'classnames';

type TaskConditionProps = {
    className?: string;
    title: string;
    id: number;
};

export const TaskCondition: FC<TaskConditionProps> = ({
    className,
    title,
    id,
}) => {
    const { desksInfo } = useContext(DeskInfoContext);

    return (
        <div
            className={cn(
                styles.taskCondition,
                styles[desksInfo[id]?.color],
                className,
            )}
        >
            <h1 className={styles.conditionTitle}>{title}</h1>
        </div>
    );
};
