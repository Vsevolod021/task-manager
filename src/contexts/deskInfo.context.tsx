import { createContext, ReactNode, useEffect, useState } from 'react';

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

    useEffect(() => {
        const deskNameStateData =
            window.localStorage.getItem('desk_name') || '';
        setDeskNameState(JSON.parse(deskNameStateData));
    }, []);

    useEffect(() => {
        const accessStateData =
            window.localStorage.getItem('access_type') || '';
        setAccessState(JSON.parse(accessStateData));
    }, []);

    useEffect(() => {
        const colorStateData = window.localStorage.getItem('color') || '';
        setColorState(JSON.parse(colorStateData));
    }, []);

    useEffect(() => {
        const isCreatedStateData =
            window.localStorage.getItem('is_created') || '';
        setIsCreatedState(JSON.parse(isCreatedStateData));
    }, []);

    useEffect(() => {
        localStorage.setItem('desk_name', JSON.stringify(deskNameState));
    }, [deskNameState]);

    useEffect(() => {
        localStorage.setItem('access_type', JSON.stringify(accessState));
    }, [accessState]);

    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(colorState));
    }, [colorState]);

    useEffect(() => {
        localStorage.setItem('is_created', JSON.stringify(isCreatedState));
    }, [isCreatedState]);

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
