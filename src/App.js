import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';

function App() {
    return (<ThemeProvider theme={theme}></ThemeProvider>);
}

export default App;
