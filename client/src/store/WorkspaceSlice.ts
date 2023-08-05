import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Workspace = {
    theme: string;
    color: string;
};

const initialState: Workspace = {
    theme: 'light',
    color: 'default',
};

const workspaceSlice = createSlice({
    name: 'Workspace',
    initialState,
    reducers: {
        setWorkspace(state, action: PayloadAction<Workspace>) {
            state.theme = action.payload.theme;
            state.color = action.payload.color;
        },
    },
});

export const { setWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
