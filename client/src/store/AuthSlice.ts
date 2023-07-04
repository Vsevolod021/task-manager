import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Auth = {
    isAuth: boolean;
};

const initialState: Auth = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = !action.payload;
        },
    },
});

export const { toggleIsAuth } = authSlice.actions;

export default authSlice.reducer;
