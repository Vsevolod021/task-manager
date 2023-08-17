import React, { FC } from 'react';

import styles from './Error.module.scss';

type ErrorProps = {
    errorText: string;
    className?: string;
};

export const Error: FC<ErrorProps> = ({ errorText, className }) => {
    return <h1 className={styles.h1}>{errorText}</h1>;
};
