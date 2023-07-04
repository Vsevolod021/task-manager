import { configureStore } from '@reduxjs/toolkit';
import isAuthReducer from './isAuthSlice';

const store = configureStore({
    reducer: {
        isAuth: isAuthReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
