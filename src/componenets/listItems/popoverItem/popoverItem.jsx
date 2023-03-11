import { MenuItem } from '@mui/material';
import React from 'react';

const popoverItem = ({children}) => {
    return (
        <MenuItem>{children}</MenuItem>
    );
}

export default popoverItem;
