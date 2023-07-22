import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Auth = {
    isAuth: boolean;
    userName: string;
    userId: number | null;
};

const initialState: Auth = {
    isAuth: false,
    userName: '',
    userId: null,
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = !action.payload;
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUserName(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
    },
});

export const { toggleIsAuth, setIsAuth, setUserName } = authSlice.actions;

export default authSlice.reducer;
