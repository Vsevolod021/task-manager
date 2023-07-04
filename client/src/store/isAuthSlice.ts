import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        toggleIsAuth(state) {
            // state = !state;
            return !state;
        },
    },
});

export const { toggleIsAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;
