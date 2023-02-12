import { FC, useState } from 'react';
import styles from './Arrow.module.scss';
import cn from 'classnames';

type ArrowProps = {
    className?: string;
}

export const Arrow: FC<ArrowProps> = ({ className }) => {
    const [isArrowOpened, setIsArrowOpened] = useState<boolean>(false)

    return (
        <span
            onClick={() => setIsArrowOpened(!isArrowOpened)}
            className={cn(styles.arrow, className, {
                [styles.arrowOpened]: isArrowOpened
            })}
        ></span>
    );
};