import { Provider } from 'react-redux';
import store from './store';

import { CreationConditionContextProvider } from './contexts/creationCondition.context';
import { DeskInfoContextProvider } from './contexts/deskInfo.context';

import { AppRouter } from './router/AppRouter';

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
