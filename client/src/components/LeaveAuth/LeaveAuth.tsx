import { useNavigate } from 'react-router-dom';

import styles from './LeaveAuth.module.scss';

import leaveAuth from '../../assets/leaveAuth.svg';

export const LeaveAuth = () => {
    const navigate = useNavigate();

    return (
        <button className={styles.button} onClick={() => navigate('/')}>
            <img src={leaveAuth} width={54} height={54} />
        </button>
    );
};
