import { Layout } from './Layout/Layout';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DesksPage } from './pages/DesksPage/DesksPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';
import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskPage } from './pages/DeskPage/DeskPage';

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
