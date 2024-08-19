// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#f0f0f0', color: '#333', padding: '8px 16px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/main-log-resize.png`}  // Correctly reference the logo in the public folder
                        alt="Su-Chef Logo"
                        style={{ maxHeight: '60px', marginRight: '10px', objectFit: 'contain' }}  // Adjust size and spacing as needed
                    />
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', lineHeight: 1 }}>
                        Su-Chef
                    </Typography>
                </Box>
                <Box>
                    <Button component={Link} to="/" sx={{ color: 'inherit' }}>Home</Button>
                    <Button component={Link} to="/catalogue" sx={{ color: 'inherit' }}>Catalogue</Button>
                    <Button component={Link} to="/blog" sx={{ color: 'inherit' }}>Blog</Button>
                    <Button component={Link} to="/about" sx={{ color: 'inherit' }}>About Us</Button>
                    <Button component={Link} to="/contact" sx={{ color: 'inherit' }}>Contact</Button>
                    <Button component={Link} to="/login" sx={{ color: 'inherit' }}>Login</Button>
                    <Button component={Link} to="/register" sx={{ color: 'inherit' }}>Register</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
