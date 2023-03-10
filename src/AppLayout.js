import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './assets/sass/appLayout.scss';

function App() {
    return (<ThemeProvider theme={theme}></ThemeProvider>);
}

export default App;
