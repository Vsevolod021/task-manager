import { DeskInfoContext } from '../../contexts/deskInfo.context';
import community from '../../assets/community.svg';
import lock from '../../assets/lock.svg';
import styles from './Desk.module.scss';
import { FC, useContext } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';

type DeskProps = {
    className?: string;
};

export const Desk: FC<DeskProps> = ({ className }) => {
    const { desksInfo } = useContext(DeskInfoContext);
    const { id } = useParams<{ id?: string }>();

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
                            <div
                                className={cn(
                                    styles.taskCondition,
                                    styles[desksInfo[+id]?.color],
                                )}
                            ></div>
                            <div
                                className={cn(
                                    styles.taskCondition,
                                    styles[desksInfo[+id]?.color],
                                )}
                            ></div>
                            <div
                                className={cn(
                                    styles.taskCondition,
                                    styles[desksInfo[+id]?.color],
                                )}
                            ></div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};
