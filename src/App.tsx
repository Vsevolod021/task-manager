import { Route, Routes, Link } from 'react-router-dom';

import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { DesksPage } from './pages/DesksPage/DesksPage';
import { HomePage } from './pages/HomePage/HomePage';
import { DeskPage } from './pages/DeskPage/DeskPage';
import { Layout } from './Layout/Layout';

function App() {
    const app = () => {
        return (
            <>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/desks" element={<DesksPage />} />
                    <Route path="/desk/:id" element={<DeskPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </>
        );
    };

    return (
        <DeskInfoContextProvider desksInfo={[]}>
            <CreationConditionContextProvider isCreationOpened={false}>
                {app()}
            </CreationConditionContextProvider>
        </DeskInfoContextProvider>
    );
}

export default App;
