import { useParams, Navigate } from 'react-router-dom';
import { FC, useContext, useState } from 'react';

import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { TaskCondition, TaskCard, AppendTaskButton } from '..';

import community from '../../assets/community.svg';
import lock from '../../assets/lock.svg';

import styles from './Desk.module.scss';
import cn from 'classnames';

type DeskProps = {
    className?: string;
};

export const Desk: FC<DeskProps> = ({ className }) => {
    const { desksInfo, setDesksInfo } = useContext(DeskInfoContext);
    const { id } = useParams<{ id?: string }>();

    if (!id || !desksInfo.map((elem) => elem.id).includes(+id)) {
        return <Navigate to={'/notFound'} />;
    }

    const appendTask = () => {
        // console.log(desksInfo.slice(0, -1));

        setDesksInfo &&
            setDesksInfo([
                ...desksInfo.slice(0, -1),
                {
                    id: desksInfo[+id].id,
                    name: desksInfo[+id].name,
                    color: desksInfo[+id].color,
                    access: desksInfo[+id].access,
                    conditions: {
                        toDo: [{ name: 'one' }],
                        inProcess: [],
                        done: [],
                    },
                },
            ]);

        console.log(desksInfo[+id].conditions?.toDo);
    };

    return (
        <main className={cn(className, styles.deskContainer)}>
            {id && (
                <>
                    <h1 className={styles.deskName}>{desksInfo[+id]?.name}</h1>
                    <div className={styles.access}>
                        <img
                            src={
                                desksInfo[+id]?.access === 'public'
                                    ? community
                                    : lock
                            }
                            alt=""
                        />
                        <span>{desksInfo[+id]?.access}</span>
                    </div>
                    {/* <div className={styles.color}>{color}</div> */}
                    <div className={styles.deskFrame}>
                        <div className={styles.tasksFrame}>
                            <TaskCondition title="Done" id={+id}>
                                <AppendTaskButton onClick={appendTask} />
                                {/* {desksInfo[+id]?.conditions?. && } */}
                            </TaskCondition>
                            <TaskCondition title="Done" id={+id}>
                                <AppendTaskButton />
                            </TaskCondition>
                            <TaskCondition title="Done" id={+id}>
                                <AppendTaskButton />
                            </TaskCondition>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};
