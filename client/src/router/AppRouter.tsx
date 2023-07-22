import React, { ReactNode, useEffect } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { NOTFOUND_ROUTE } from '../utils/consts';

import { authRoutes, publicRoutes } from './routes';
import { check } from '../http/userAPI';
import { setUserName, setIsAuth } from '../store/AuthSlice';

export const AppRouter = () => {
    const dispatch = useAppDispatch();
    const isAuth: boolean = localStorage.getItem('token') ? true : false;

    const location = useLocation();

    console.log(location);

    useEffect(() => {
        check()
            .then((data) => {
                dispatch(setIsAuth(true));
                dispatch(setUserName(data?.name));
            })
            .catch((err) => console.log(err));
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
