import { FC } from 'react';
import styles from './DropDownList.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type DropDownListProps = {
    options: { name: string; path: string }[];
    className?: string;
};

export const DropDownList: FC<DropDownListProps> = ({ options, className }) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            {options.map((elem) => (
                <button className={styles.option}>
                    <Link to={elem.path}>{elem.name}</Link>
                </button>
            ))}
        </div>
    );
};
