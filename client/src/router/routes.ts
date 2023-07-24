import {
    REGISTRATION_ROUTE,
    NOTFOUND_ROUTE,
    PROFILE_ROUTE,
    LOGIN_ROUTE,
    DESK_ROUTE,
    USER_ROUTE,
    HOME_ROUTE,
} from '../utils/consts';

import {
    RegistrationPage,
    NotFoundPage,
    ProfilePage,
    LoginPage,
    DesksPage,
    DeskPage,
    HomePage,
} from '../pages/index';

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage,
    },
    {
        path: USER_ROUTE + '/:id',
        Component: DesksPage,
    },
    {
        path: DESK_ROUTE + '/:id',
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
