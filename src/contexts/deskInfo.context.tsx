import { createContext, ReactNode, useEffect, useState } from 'react';
import IDeskInfo from '../interfaces/deskInfo.interface';
import { useSaveState } from '../hooks/useSaveState';

export interface IDeskInfoContext {
    desksInfo: IDeskInfo[];
    setDesksInfo?: (newDeskInfo: IDeskInfo[]) => void;
}

export const DeskInfoContext = createContext<IDeskInfoContext>({
    desksInfo: [],
});

export const DeskInfoContextProvider = ({
    desksInfo,
    children,
}: IDeskInfoContext & { children: ReactNode }): JSX.Element => {
    const [desksInfoState, setDesksInfoState] =
        useState<IDeskInfo[]>(desksInfo);

    const setDesksInfo = (newDeskInfo: IDeskInfo[]) => {
        setDesksInfoState(newDeskInfo);
    };

    return (
        <DeskInfoContext.Provider
            value={{
                desksInfo: desksInfoState,
                setDesksInfo,
            }}
        >
            {children}
        </DeskInfoContext.Provider>
    );
};
