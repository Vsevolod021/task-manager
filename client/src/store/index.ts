import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import modalReducer from './ModalSlice';

const store = configureStore({
    reducer: {
        Auth: authReducer,
        Modal: modalReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
