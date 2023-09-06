import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { authRoutes, publicRoutes } from './routes';
import { NOTFOUND_ROUTE } from '../utils/consts';

import { setUserName, setIsAuth, setUserId } from '../store/AuthSlice';
import { setWorkspace } from '../store/WorkspaceSlice';
import { useAppDispatch } from '../hooks/redux';

import { getWorkspace } from '../http/workspaceAPI';
import { check } from '../http/userAPI';
import { getDesk } from '../http/deskAPI';

export const AppRouter = () => {
    const dispatch = useAppDispatch();

    const isAuth: boolean = localStorage.getItem('token') ? true : false;

    useEffect(() => {
        check()
            .then((data) => {
                dispatch(setIsAuth(true));
                dispatch(setUserName(data?.name));
                dispatch(setUserId(data?.id));

                console.log(data);

                if (data.id) {
                    getWorkspace(data.id)
                        .then((data) => {
                            dispatch(
                                setWorkspace({
                                    theme: data.theme,
                                    color: data.color,
                                }),
                            );
                        })
                        .catch((err) => console.log('adfvafd ' + err));
                }
            })
            .catch((err) => console.log('qqq ' + err));
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
