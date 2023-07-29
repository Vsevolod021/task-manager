import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Modal = {
    isOpened: boolean;
};

const initialState: Modal = {
    isOpened: false,
};

const modalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        toggleIsOpened(state, action: PayloadAction<boolean>) {
            state.isOpened = !action.payload;
        },
    },
});

export const { toggleIsOpened } = modalSlice.actions;

export default modalSlice.reducer;
