import { Provider } from 'react-redux';
import store from './store';

import { DeskInfoContextProvider } from './contexts/deskInfo.context';

import { AppRouter } from './router/AppRouter';

function App() {
    return (
        <Provider store={store}>
            <DeskInfoContextProvider desksInfo={[]}>
                <AppRouter />
            </DeskInfoContextProvider>
        </Provider>
    );
}

export default App;
