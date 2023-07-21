import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Auth = {
    isAuth: boolean;
    userName: string;
};

const initialState: Auth = {
    isAuth: false,
    userName: '',
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = !action.payload;
        },
        setIssAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setUserName(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
    },
});

export const { toggleIsAuth, setIssAuth, setUserName } = authSlice.actions;

export default authSlice.reducer;
