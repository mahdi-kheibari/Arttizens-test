import { createTheme } from '@mui/material/styles';

const typographyVariants = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 500,
    fontWeightMedium: 400,
    fontWeightRegular: 300,
    fontWeightLight: 300,
}
const theme = createTheme({
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
export const getDesignPalette = (mode) => ({
    palette: {
        ...theme.palette,
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: { main: '#0cae96' },
                primary_light: { main: '#6cfbdb' },
                secondary: { main: '#28272c' },
                success: { main: '#22C157' },
                info: { main: '#6072FB' },
                warning: { main: '#fd9350' },
                danger: { main: '#FB6072' },
                gray: { main: '#79797a' },
                gray_light: { main: '#e6e7eb' },
                bgColor: { main: '#F4F5F7' },
                light: { main: '#fff' },
                dark: { main: '#1f2229' },
                white: { main: '#fff' },
                muted: { main: '#6c757d' },
                text: {
                    ...theme.palette.text,
                    primary: "#28272c",
                    secondary: "#28272c"
                },
                background: {
                    ...theme.palette.background,
                    default: "#F4F5F7",
                    paper: "#F4F5F7"
                },
                action: {
                    ...theme.palette.action,
                    activatedOpacity: 0.12,
                    active: "rgba(40, 39, 44, 0.54)",
                    disabled: "rgba(40, 39, 44, 0.26)",
                    disabledBackground: "rgba(40, 39, 44, 0.12)",
                    disabledOpacity: 0.38,
                    focus: "rgba(40, 39, 44, 0.12)",
                    focusOpacity: 0.12,
                    hover: "rgba(40, 39, 44, 0.04)",
                    hoverOpacity: 0.04,
                    selected: "rgba(40, 39, 44, 0.08)",
                    selectedOpacity: 0.08
                }
            }
            : {
                // palette values for dark mode
                primary: { main: '#0cae96' },
                primary_light: { main: '#6cfbdb' },
                secondary: { main: '#f9fbfe' },
                success: { main: '#22C157' },
                info: { main: '#6072FB' },
                warning: { main: '#fd9150' },
                danger: { main: '#FB6072' },
                gray: { main: '#909399' },
                gray_light: { main: '#212329' },
                bgColor: { main: '#1a191f' },
                light: { main: '#fff' },
                dark: { main: '#1f2229' },
                white: { main: '#fff' },
                muted: { main: '#6c757d' },
                text: {
                    ...theme.palette.text,
                    primary: "#f9fbfe",
                    secondary: "#f9fbfe"
                },
                background: {
                    ...theme.palette.background,
                    default: "#1a191f",
                    paper: "#1a191f"
                },
                common: {
                    black: "#000",
                    white: "#fff"
                },
                action: {
                    ...theme.palette.action,
                    activatedOpacity: 0.12,
                    active: "rgba(249, 251, 254, 0.54)",
                    disabled: "rgba(249, 251, 254, 0.26)",
                    disabledBackground: "rgba(249, 251, 254, 0.12)",
                    disabledOpacity: 0.38,
                    focus: "rgba(249, 251, 254, 0.12)",
                    focusOpacity: 0.12,
                    hover: "rgba(249, 251, 254, 0.04)",
                    hoverOpacity: 0.04,
                    selected: "rgba(249, 251, 254, 0.08)",
                    selectedOpacity: 0.08
                }
            }),
    }
});
export default theme;