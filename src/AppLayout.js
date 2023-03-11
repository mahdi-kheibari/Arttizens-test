import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Index from './page/index';
import './appLayout.scss';
import { Box } from '@mui/system';
import AppHeader from './componenets/shared/appHeader/AppHeader';
import Context from './store/Context';

function App() {
    return (
        <Context>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    minHeight: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Box sx={{ flex: "1 0 auto" }}>
                        <AppHeader></AppHeader>
                        <Index></Index>
                    </Box>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                </Box>
            </ThemeProvider>
        </Context>
    );
}

export default App;
