import React, { ReactNode, FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './FormButton.module.scss';

interface FormButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    className?: string;
}

export const FormButton: FC<FormButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button className={cn(className, styles.button)} {...props}>
            {children}
        </button>
    );
};
