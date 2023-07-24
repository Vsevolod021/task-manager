import { Link } from 'react-router-dom';
import { FC } from 'react';

import styles from './DropDownList.module.scss';
import cn from 'classnames';

type DropDownListProps = {
    options: { name: string; onClick?: () => void }[];
    outline: 'primary' | 'black';
    className?: string;
};

export const DropDownList: FC<DropDownListProps> = ({
    options,
    outline,
    className,
}) => {
    return (
        <div
            className={cn(className, styles.wrapper, {
                [styles.primary]: outline === 'primary',
                [styles.black]: outline === 'black',
            })}
        >
            {options.map((elem) => (
                <button
                    className={styles.option}
                    key={elem.name}
                    onClick={elem.onClick}
                >
                    {elem.name}
                </button>
            ))}
        </div>
    );
};
