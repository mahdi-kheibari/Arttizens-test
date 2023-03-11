import React from 'react';
import { createContext } from "react";
import index from './index'

export const store = createContext({headerItems:[]})

const Context = ({ children }) => {
    return (
        <store.Provider value={{ ...index}}>
            {children}
        </store.Provider>
    );
}

export default Context;