import { Route, Routes, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';

import {
    NotFoundPage,
    DeskPage,
    DesksPage,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
} from './pages/index';

function App() {
    const app = () => {
        return (
            <>
                <Routes>
                    <Route path="/user/:id" element={<HomePage />} />
                    <Route path="/user/profile" element={<ProfilePage />} />
                    <Route path="/desks" element={<DesksPage />} />
                    <Route path="/desk/:id" element={<DeskPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </>
        );
    };

    return (
        <Provider store={store}>
            <DeskInfoContextProvider desksInfo={[]}>
                <CreationConditionContextProvider isCreationOpened={false}>
                    {app()}
                </CreationConditionContextProvider>
            </DeskInfoContextProvider>
        </Provider>
    );
}

export default App;
