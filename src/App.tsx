import { Layout } from './Layout/Layout';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DesksPage } from './pages/DesksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';

function App() {
    return (
        <DeskInfoContextProvider deskName="" access="" color="default">
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/desks" element={<DesksPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </DeskInfoContextProvider>
    );
}

export default App;
