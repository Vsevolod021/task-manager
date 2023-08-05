import { configureStore } from '@reduxjs/toolkit';

import workspaceReducer from './WorkspaceSlice';
import modalReducer from './ModalSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        WorkspaceSlice: workspaceReducer,
        Modal: modalReducer,
        Auth: authReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
