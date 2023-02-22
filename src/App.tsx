import { Layout } from './Layout/Layout';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DesksPage } from './pages/DesksPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
    return (
        <div className="App">
            {/* <Layout /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/desks" element={<DesksPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
