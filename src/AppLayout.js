import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Index from './page/index';
import './appLayout.scss';
import { Box } from '@mui/system';
import AppHeader from './components/shared/appHeader/AppHeader';
import Context from './store/Context';
import AppFooter from './components/shared/appFooter/AppFooter';

function App() {
    return (
        <Context>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Box sx={{ flex: "1 0 auto" }}>
                        <AppHeader></AppHeader>
                        <Index></Index>
                    </Box>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                    <AppFooter></AppFooter>
                </Box>
            </ThemeProvider>
        </Context>
    );
}

export default App;
