import { createContext, ReactNode, useState } from "react";

// export type accessType = 'private' | 'public';
// export type colorType = 'default' | 'red' | 'yellow' | 'blue' | 'pink' | 'purple';

export interface IDeskInfoContext {
    deskName: string;
    access: string;
    color: string;
    setDeskName?: (newDeskName: string) => void;
    setAccess?: (newAccess: string) => void;
    setColor?: (newColor: string) => void;
};

export const DeskInfoContext = createContext<IDeskInfoContext>({ deskName: 'desk name', access: 'public', color: 'default' });

export const DeskInfoContextProvider = ({ deskName, access, color, children }: IDeskInfoContext & { children: ReactNode }): JSX.Element => {
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

    return <DeskInfoContext.Provider value={{ deskName: deskNameState, access: accessState, color: colorState, setDeskName, setAccess, setColor }}>
        {children}
    </DeskInfoContext.Provider>
};
