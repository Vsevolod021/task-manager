import React, { ReactNode, FC, HTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './FormInput.module.scss';

interface FormInputProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    className?: string;
    type?: string;
}

export const FormInput: FC<FormInputProps> = ({
    className,
    type,
    ...props
}) => {
    return (
        <input className={cn(className, styles.input)} {...props} type={type} />
    );
};
