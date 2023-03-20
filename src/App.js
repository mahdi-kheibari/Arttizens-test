import Context from './store/Context';
import AppLayout from './layouts/AppLayout';
import './appLayout.scss';
import ReduxProvider from './store/redux/provider';

function App() {

    return (
        <ReduxProvider>
            <Context>
                <AppLayout />
            </Context>
        </ReduxProvider>
    );
}

export default App;
