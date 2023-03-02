import { Layout } from './Layout/Layout';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DesksPage } from './pages/DesksPage/DesksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';
import { CreationConditionContextProvider } from './contexts/creationCondition.context';

function App() {
    return (
        <DeskInfoContextProvider desksInfo={[]}>
            <CreationConditionContextProvider isCreationOpened={false}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/desks" element={<DesksPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </CreationConditionContextProvider>
        </DeskInfoContextProvider>
    );
}

export default App;
