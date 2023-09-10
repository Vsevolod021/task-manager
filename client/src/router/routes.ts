import {
    REGISTRATION_ROUTE,
    NOTFOUND_ROUTE,
    WORKSPACE_ROUTE,
    LOGIN_ROUTE,
    DESK_ROUTE,
    USER_ROUTE,
    HOME_ROUTE,
} from '../utils/consts';

import {
    RegistrationPage,
    NotFoundPage,
    WorkspacePage,
    LoginPage,
    DesksPage,
    DeskPage,
    HomePage,
} from '../pages/index';

export const authRoutes = [
    {
        path: WORKSPACE_ROUTE,
        Component: WorkspacePage,
    },
    {
        path: USER_ROUTE + '/:id',
        Component: DesksPage,
    },
    {
        path: DESK_ROUTE,
        Component: DeskPage,
    },
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFoundPage,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage,
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
];
