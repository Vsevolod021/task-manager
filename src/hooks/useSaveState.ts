import { useEffect } from 'react';

export type stateType = string | boolean;

export const useSaveState = <T>(
    stateName: string,
    currentState: T,
    saveState: (newState: T) => void,
) => {
    useEffect(() => {
        const stateData: string = window.localStorage.getItem(stateName) || '';
        saveState(JSON.parse(stateData));
    }, []);

    useEffect(() => {
        window.localStorage.setItem(stateName, JSON.stringify(currentState));
    }, [currentState]);
};
