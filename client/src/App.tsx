import { useEffect } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { useAppDispatch, useAppSelector } from './hooks/redux';

import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';

import { AppRouter } from './router/AppRouter';

import {
    NotFoundPage,
    DeskPage,
    DesksPage,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
} from './pages/index';
import { check } from './http/userAPI';
import { setUserName, toggleIsAuth } from './store/AuthSlice';

function App() {
    return (
        <Provider store={store}>
            <DeskInfoContextProvider desksInfo={[]}>
                <CreationConditionContextProvider isCreationOpened={false}>
                    <AppRouter />
                </CreationConditionContextProvider>
            </DeskInfoContextProvider>
        </Provider>
    );
}

export default App;
