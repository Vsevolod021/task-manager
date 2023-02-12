import cn from 'classnames';
import styles from './Footer.module.scss';
import { FC } from 'react';

type FooterProps = {
    className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn(styles.footer, className)}>
            <span>© All rights reserved</span>
        </footer>
    );
}