import { createTheme } from '@mui/material/styles';

const typographyVariants = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 300,
}
const theme = createTheme({
    palette: {
        primary: { main: '#0cae96' },
        primary_light: { main: '#6cfbdb' },
        secondary: { main: '#28272c' },
        success: { main: '#22C157' },
        info: { main: '#6072FB' },
        warning: { main: '#fd9350' },
        danger: { main: '#FB6072' },
        gray: { main: '#79797a' },
        gray_light: { main: '#e6e7eb' },
        light: { main: '#F4F5F7' },
        dark: { main: '#2c3e50' },
        white: { main: '#fff' },
        muted: { main: '#6c757d' }
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        },
    },
    typography: { ...typographyVariants },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthSm: {
                    '&.MuiContainer-maxWidthSm': {
                        maxWidth: '540px',
                    },
                },
                maxWidthMd: {
                    '&.MuiContainer-maxWidthMd': {
                        maxWidth: '720px',
                    },
                },
                maxWidthLg: {
                    '&.MuiContainer-maxWidthLg': {
                        maxWidth: '960px',
                    },
                },
                maxWidthXl: {
                    '&.MuiContainer-maxWidthXl': {
                        maxWidth: '1140px',
                    },
                },
                maxWidthXxl: {
                    '&.MuiContainer-maxWidthXxl': {
                        maxWidth: '1320px',
                    },
                },
                fixed: {
                    '&.MuiContainer-fixed': {
                    },
                }
            }
        },
    },
});
const ContainerFixed = {
    [theme.breakpoints.up('sm')]: {
        maxWidth: '540px',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: '720px',
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '960px',
    },
    [theme.breakpoints.up('xl')]: {
        maxWidth: '1140px',
    },
    [theme.breakpoints.up('xxl')]: {
        maxWidth: '1320px',
    },
}
theme.components.MuiContainer.styleOverrides.fixed['&.MuiContainer-fixed'] = ContainerFixed;
export default theme;