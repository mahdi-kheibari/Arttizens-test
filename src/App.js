import Context from './store/Context';
import AppLayout from './layouts/AppLayout';
import './appLayout.scss';

function App() {

    return (
        <Context>
            <AppLayout />
        </Context>
    );
}

export default App;
