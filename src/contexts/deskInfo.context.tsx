import { createContext, ReactNode, useEffect, useState } from 'react';
import { useSaveState } from '../hooks/useSaveState';

export interface IDeskInfoContext {
    deskName: string;
    access: string;
    color: string;
    setDeskName?: (newDeskName: string) => void;
    setAccess?: (newAccess: string) => void;
    setColor?: (newColor: string) => void;
}

export const DeskInfoContext = createContext<IDeskInfoContext>({
    deskName: '',
    access: '',
    color: 'default',
});

export const DeskInfoContextProvider = ({
    deskName,
    access,
    color,
    children,
}: IDeskInfoContext & { children: ReactNode }): JSX.Element => {
    const [deskNameState, setDeskNameState] = useState<string>(deskName);
    const setDeskName = (newDeskName: string) => {
        setDeskNameState(newDeskName);
    };

    const [accessState, setAccessState] = useState<string>(access);
    const setAccess = (newAccess: string) => {
        setAccessState(newAccess);
    };

    const [colorState, setColorState] = useState<string>(color);
    const setColor = (newColor: string) => {
        setColorState(newColor);
    };

    // useSaveState('desk_name', deskNameState, setDeskNameState);
    // useSaveState('access_type', accessState, setAccessState);
    // useSaveState('color', colorState, setColorState);

    return (
        <DeskInfoContext.Provider
            value={{
                deskName: deskNameState,
                access: accessState,
                color: colorState,
                setDeskName,
                setAccess,
                setColor,
            }}
        >
            {children}
        </DeskInfoContext.Provider>
    );
};
