import { FC } from 'react';

import styles from './Footer.module.scss';
import cn from 'classnames';

type FooterProps = {
    className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn(styles.footer, className)}>
            <span>TaskManager © 2023</span>
        </footer>
    );
};
