import { FC, useState } from 'react';
import styles from './Arrow.module.scss';
import cn from 'classnames';
import { DropDownList } from '..';

type ArrowProps = {
    className?: string;
};

export const Arrow: FC<ArrowProps> = ({ className }) => {
    const [isArrowOpened, setIsArrowOpened] = useState<boolean>(false);
    const menuOptions = [
        { name: 'Second Name, Name', path: '/' },
        { name: 'Edit Profile', path: '*' },
        { name: 'Sign out', path: '*' },
    ];

    return (
        <div className={cn(styles.wrapper, className)}>
            <span
                onClick={() => setIsArrowOpened(!isArrowOpened)}
                className={cn(styles.arrow, className, {
                    [styles.arrowOpened]: isArrowOpened,
                })}
            ></span>
            {isArrowOpened && (
                <DropDownList
                    options={menuOptions}
                    className={styles.menuOptions}
                    outline="black"
                />
            )}
        </div>
    );
};
