import { useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { createContext } from "react";
import index from './index'

export const store = createContext({ headerItems: [], prefersthemeMode: "", toggleColorMode: () => { } })
const Context = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const toggleColorMode = (prevMode) => {
        return prevMode === 'light' ? 'dark' : 'light'
    }
    const themeMode = useMemo(
        () => prefersDarkMode ? 'dark' : 'light',
        [prefersDarkMode],
    );
    return (
        <store.Provider value={{ ...index, prefersthemeMode: themeMode, toggleColorMode }}>
            {children}
        </store.Provider>
    );
}

export default Context;