import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './FormInput.module.scss';

interface FormInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    className?: string;
}

export const FormInput: FC<FormInputProps> = ({
    className,
    type,
    value,
    ...props
}) => {
    return <input className={cn(className, styles.input)} {...props} />;
};
