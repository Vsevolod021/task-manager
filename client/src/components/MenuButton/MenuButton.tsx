import { FC, useState } from 'react';

import { DropDownList } from '..';

import styles from './MenuButton.module.scss';
import { useNavigate } from 'react-router-dom';

type MenuButtonProps = {
    className?: string;
};

export const MenuButton: FC<MenuButtonProps> = ({ className, ...props }) => {
    const navigate = useNavigate();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const menuOptions = [
        { name: 'All Desks', onClick: () => navigate('*') },
        { name: 'Notifications', onClick: () => navigate('*') },
        { name: 'Settings', onClick: () => navigate('*') },
    ];

    return (
        <button
            className={styles.buttonWrapper}
            {...props}
            onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
            <div className={styles.buttonBurger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <span className={styles.buttonText}>Меню</span>
            {isMenuOpened && (
                <DropDownList
                    options={menuOptions}
                    className={styles.menuOptions}
                    outline="primary"
                />
            )}
        </button>
    );
};
