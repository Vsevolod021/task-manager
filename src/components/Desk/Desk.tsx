import { DeskInfoContext } from '../../contexts/deskInfo.context';
import community from '../../assets/community.svg';
import lock from '../../assets/lock.svg';
import styles from './Desk.module.scss';
import { FC, useContext } from 'react';
import cn from 'classnames';

type DeskProps = {
    className?: string;
};

export const Desk: FC<DeskProps> = ({ className }) => {
    const { desksInfo } = useContext(DeskInfoContext);

    return (
        <main className={cn(className, styles.deskContainer)}>
            <h1 className={styles.deskName}>
                {desksInfo[desksInfo.length]?.name}
            </h1>
            <div className={styles.access}>
                <img
                    src={
                        desksInfo[desksInfo.length]?.access === 'public'
                            ? community
                            : lock
                    }
                    alt=""
                />
                <span>{desksInfo[desksInfo.length]?.access}</span>
            </div>
            {/* <div className={styles.color}>{color}</div> */}
            <div className={styles.deskFrame}>
                <div className={styles.tasksFrame}>
                    <div
                        className={cn(
                            styles.taskCondition,
                            styles[desksInfo[desksInfo.length]?.color],
                        )}
                    ></div>
                    <div
                        className={cn(
                            styles.taskCondition,
                            styles[desksInfo[desksInfo.length]?.color],
                        )}
                    ></div>
                    <div
                        className={cn(
                            styles.taskCondition,
                            styles[desksInfo[desksInfo.length]?.color],
                        )}
                    ></div>
                </div>
            </div>
        </main>
    );
};
