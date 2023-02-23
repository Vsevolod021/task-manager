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
    const { deskName, access, color } = useContext(DeskInfoContext);

    return (
        <main className={cn(className, styles.deskContainer)}>
            <h1 className={styles.deskName}>{deskName}</h1>
            <div className={styles.access}>
                <img src={access === 'public' ? community : lock} alt="" />
                <span>{access}</span>
            </div>
            {/* <div className={styles.color}>{color}</div> */}
            <div className={styles.deskFrame}>
                <div className={styles.tasksFrame}>
                    <div
                        className={cn(styles.taskCondition, styles[color])}
                    ></div>
                    <div
                        className={cn(styles.taskCondition, styles[color])}
                    ></div>
                    <div
                        className={cn(styles.taskCondition, styles[color])}
                    ></div>
                </div>
            </div>
        </main>
    );
};
