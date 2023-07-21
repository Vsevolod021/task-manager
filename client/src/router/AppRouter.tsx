import React, { ReactNode, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { NOTFOUND_ROUTE } from '../utils/consts';

import { authRoutes, publicRoutes } from './routes';
import { check } from '../http/userAPI';
import { setUserName, setIssAuth } from '../store/AuthSlice';

export const AppRouter = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector((state) => state.Auth.isAuth);

    const userName = useAppSelector((state) => state.Auth.userName);

    useEffect(() => {
        check().then((data) => {
            dispatch(setIssAuth(true));
            dispatch(setUserName(userName));
        });
    }, []);

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={NOTFOUND_ROUTE} />} />
        </Routes>
    );
};
