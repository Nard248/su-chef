// src/components/Layout.js
import React from 'react';
import { Box } from '@mui/material';

function Layout({ children }) {
    return (
        <Box sx={{ marginTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
        </Box>
    );
}

export default Layout;
