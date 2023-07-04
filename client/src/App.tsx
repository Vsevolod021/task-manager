import { Route, Routes, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { DesksPage } from './pages/DesksPage/DesksPage';
import { HomePage } from './pages/HomePage/HomePage';
import { DeskPage } from './pages/DeskPage/DeskPage';
import { Layout } from './Layout/Layout';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

function App() {
    const app = () => {
        return (
            <>
                <Routes>
                    <Route path="/" element={<HomePage />} />
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
