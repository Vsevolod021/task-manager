import { FC, useState } from 'react';

import { DropDownList } from '..';

import styles from './MenuButton.module.scss';

type MenuButtonProps = {
    className?: string;
};

export const MenuButton: FC<MenuButtonProps> = ({ className, ...props }) => {
    const menuOptions = [
        { name: 'All Desks', path: '/desks' },
        { name: 'Notifications', path: '*' },
        { name: 'Settings', path: '*' },
    ];

    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

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
            <span className={styles.buttonText}>Menu</span>
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
