import { useParams, Navigate } from 'react-router-dom';
import { FC, useContext } from 'react';

import { DeskInfoContext } from '../../contexts/deskInfo.context';
import { TaskCondition } from '..';

import community from '../../assets/community.svg';
import lock from '../../assets/lock.svg';

import styles from './Desk.module.scss';
import cn from 'classnames';

type DeskProps = {
    className?: string;
};

export const Desk: FC<DeskProps> = ({ className }) => {
    const { desksInfo } = useContext(DeskInfoContext);
    const { id } = useParams<{ id?: string }>();

    if (!id || !desksInfo.map((elem) => elem.id).includes(+id)) {
        return <Navigate to={'/notFound'} />;
    }

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
                            <TaskCondition title="To Do" id={+id} />
                            <TaskCondition title="In Progress" id={+id} />
                            <TaskCondition title="Done" id={+id} />
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};
