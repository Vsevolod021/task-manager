import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { DeskAPIInterface } from '../../interfaces/deskData.interface';

import avatarIcon from '../../assets/avatar.png';

import cn from 'classnames';
import styles from './DeskCard.module.scss';

type DeskCardProps = {
    className?: string;
    deskData: DeskAPIInterface;
};

export const DeskCard: FC<DeskCardProps> = ({ deskData, className }) => {
    const navigate = useNavigate();

    return (
        <div
            className={cn(styles.deskItem, className)}
            key={deskData.id}
            onClick={() => navigate(`/desk?deskId=${deskData.id}`)}
        >
            <div className={styles.deskNameTitle}>Название:</div>
            <div className={styles.deskName}>{deskData.name}</div>
            <div className={styles.participantsTitle}>Участники:</div>
            <div className={styles.participants}>
                {new Array(5).fill('').map((a) => (
                    <div className={styles.participantAvatar}>
                        <img src={avatarIcon} width={36} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};
