import React, { ReactNode, FC } from 'react';
import cn from 'classnames';
import styles from './FormInput.module.scss';

type FormInputProps = {
    placeholder: string;
    type?: string;
    className?: string;
};

export const FormInput: FC<FormInputProps> = ({
    placeholder,
    type,
    className,
    ...props
}) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            className={cn(className, styles.input)}
            {...props}
        />
    );
};
