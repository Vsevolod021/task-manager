import { configureStore } from '@reduxjs/toolkit';

import draggedTaskReducer from './DraggedTaskSlice';
import workspaceReducer from './WorkspaceSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        DraggedTask: draggedTaskReducer,
        Workspace: workspaceReducer,
        Auth: authReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
