// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleLoginOpen = () => setIsLoginOpen(true);
    const handleLoginClose = () => setIsLoginOpen(false);

    const handleRegisterOpen = () => setIsRegisterOpen(true);
    const handleRegisterClose = () => setIsRegisterOpen(false);

    return (
        <>
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
                        <Button onClick={handleLoginOpen}
                                sx={{
                                    color: '#ffffff',
                                    backgroundColor: '#f79c20',  // Use your specified color
                                    borderRadius: '20px',  // Rounded appearance
                                    padding: '6px 16px',  // Adjust padding as needed
                                    marginLeft: '10px',  // Space between buttons
                                    '&:hover': {
                                        backgroundColor: '#e9a150',  // Slightly darker shade on hover
                                    }
                                }}
                        >
                            Login
                        </Button>
                        <Button onClick={handleRegisterOpen}
                                sx={{
                                    color: '#ffffff',
                                    backgroundColor: '#91351b',  // Use your specified color
                                    borderRadius: '20px',  // Rounded appearance
                                    padding: '6px 16px',  // Adjust padding as needed
                                    marginLeft: '10px',  // Space between buttons
                                    '&:hover': {
                                        backgroundColor: '#ddbea0',  // Slightly lighter shade on hover
                                    }
                                }}
                        >
                            Register
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Modal for Login Form */}
            <Modal open={isLoginOpen} onClose={handleLoginClose}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <LoginForm onClose={handleLoginClose} />
                </Box>
            </Modal>

            {/* Modal for Register Form */}
            <Modal open={isRegisterOpen} onClose={handleRegisterClose}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <RegisterForm onClose={handleRegisterClose} />
                </Box>
            </Modal>
        </>
    );
}

export default Navbar;
