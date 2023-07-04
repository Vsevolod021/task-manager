import { configureStore } from '@reduxjs/toolkit';
import isAuthReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        Auth: isAuthReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
