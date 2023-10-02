import { Link } from 'react-router-dom';
import { FC, useRef } from 'react';

import styles from './DropDownList.module.scss';
import cn from 'classnames';

type DropDownListProps = {
    options: { name: string; onClick?: () => void }[];
    outline: 'primary' | 'black';
    size?: 'small' | 'mid' | 'big';
    className?: string;
};

export const DropDownList: FC<DropDownListProps> = ({
    options,
    outline,
    size = 'big',
    className,
}) => {
    const buttonElem = useRef<(HTMLButtonElement | null)[]>([]);

    return (
        <div
            className={cn(className, styles.wrapper, {
                [styles.primary]: outline === 'primary',
                [styles.black]: outline === 'black',
                [styles.small]: size === 'small',
                [styles.mid]: size === 'mid',
                [styles.big]: size === 'big',
            })}
        >
            {options.map((elem, i) => (
                <button
                    className={styles.option}
                    key={elem.name}
                    ref={(elem) => (buttonElem.current[i] = elem)}
                    onClick={(e) => {
                        elem.onClick && elem.onClick();
                        buttonElem.current.forEach((b) =>
                            b?.classList.remove(`${styles.pushed}`),
                        );

                        e.currentTarget.classList.add(`${styles.pushed}`);
                    }}
                >
                    {elem.name}
                </button>
            ))}
        </div>
    );
};
