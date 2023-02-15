import cn from 'classnames';
import styles from './Desk.module.scss';
import { FC, useContext } from 'react';
import { DeskInfoContext } from '../../contexts/deskInfo.context';

type DeskProps = {
    className?: string;
}

export const Desk: FC<DeskProps> = ({ className }) => {
    const { deskName, access, color } = useContext(DeskInfoContext);

    return (
        <main className={cn(className)}>
            <div className={styles.deskName}>{deskName}</div>
            <div className={styles.access}>{access}</div>
            <div className={styles.color}>{color}</div>
        </main>
    );
}