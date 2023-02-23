import { createContext, ReactNode, useEffect, useState } from 'react';
import { useSaveState } from '../hooks/useSaveState';

export interface ICreationConditionContext {
    isCreationOpened: boolean;
    setIsCreationOpened?: (isCreationOpened: boolean) => void;
}

export const creationConditionContext =
    createContext<ICreationConditionContext>({
        isCreationOpened: false,
    });

export const CreationConditionContextProvider = ({
    isCreationOpened,
    children,
}: ICreationConditionContext & { children: ReactNode }): JSX.Element => {
    const [isCreationOpenedState, setIsCreationOpenedState] =
        useState<boolean>(isCreationOpened);
    const setIsCreationOpened = (isCreationOpened: boolean) => {
        setIsCreationOpenedState(isCreationOpened);
    };

    useSaveState(
        'is_creation_opened',
        isCreationOpenedState,
        setIsCreationOpenedState,
    );

    return (
        <creationConditionContext.Provider
            value={{
                isCreationOpened: isCreationOpenedState,
                setIsCreationOpened,
            }}
        >
            {children}
        </creationConditionContext.Provider>
    );
};
