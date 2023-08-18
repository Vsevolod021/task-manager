import { FC } from 'react';

import { TaskCondition, AppendTaskButton } from '..';

import { DeskAPIInterface } from '../../interfaces/deskData.interface';

import community from '../../assets/community.svg';
import lock from '../../assets/lock.svg';

import styles from './Desk.module.scss';
import cn from 'classnames';

type DeskProps = {
    deskData: DeskAPIInterface;
    className?: string;
};

export const Desk: FC<DeskProps> = ({ deskData, className }) => {
    const appendTask = () => {};

    return (
        <main className={cn(className, styles.deskContainer)}>
            <>
                <h1 className={styles.deskName}>{deskData.name}</h1>
                <div className={styles.access}>
                    <img
                        src={deskData.access === 'public' ? community : lock}
                        alt=""
                    />
                    <span>{deskData.access}</span>
                </div>
                {/* <div className={styles.color}>{color}</div> */}
                <div className={styles.deskFrame}>
                    <div className={styles.tasksFrame}>
                        <TaskCondition title="Done">
                            <AppendTaskButton onClick={appendTask} />
                            {/* {desksInfo[+id]?.conditions?. && } */}
                        </TaskCondition>
                        <TaskCondition title="Done">
                            <AppendTaskButton />
                        </TaskCondition>
                        <TaskCondition title="Done">
                            <AppendTaskButton />
                        </TaskCondition>
                    </div>
                </div>
            </>
        </main>
    );
};
