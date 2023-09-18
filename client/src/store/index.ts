import { configureStore } from '@reduxjs/toolkit';

import workspaceReducer from './WorkspaceSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        Workspace: workspaceReducer,
        Auth: authReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
