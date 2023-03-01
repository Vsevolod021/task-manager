import { FC } from 'react';
import styles from './DropDownList.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type DropDownListProps = {
    options: { name: string; path: string }[];
    className?: string;
    outline: 'primary' | 'black';
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
                <div className={styles.option} key={elem.name}>
                    <Link to={elem.path}>{elem.name}</Link>
                </div>
            ))}
        </div>
    );
};
