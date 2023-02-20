import { createContext, ReactNode, useState } from 'react';
import { useSaveState } from '../hooks/useSaveState';

export interface IDeskInfoContext {
    deskName: string;
    access: string;
    color: string;
    isCreated: boolean;
    setDeskName?: (newDeskName: string) => void;
    setAccess?: (newAccess: string) => void;
    setColor?: (newColor: string) => void;
    setIsCreated?: (isCreated: boolean) => void;
}

export const DeskInfoContext = createContext<IDeskInfoContext>({
    deskName: '',
    access: '',
    color: 'default',
    isCreated: false,
});

export const DeskInfoContextProvider = ({
    deskName,
    access,
    color,
    isCreated,
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

    const [isCreatedState, setIsCreatedState] = useState<boolean>(isCreated);
    const setIsCreated = (isCreated: boolean) => {
        setIsCreatedState(isCreated);
    };

    useSaveState('desk_name', deskNameState, setDeskNameState);
    useSaveState('access_type', accessState, setAccessState);
    useSaveState('color', colorState, setColorState);
    useSaveState('is_created', isCreatedState, setIsCreatedState);

    return (
        <DeskInfoContext.Provider
            value={{
                deskName: deskNameState,
                access: accessState,
                color: colorState,
                isCreated: isCreatedState,
                setDeskName,
                setAccess,
                setColor,
                setIsCreated,
            }}
        >
            {children}
        </DeskInfoContext.Provider>
    );
};
