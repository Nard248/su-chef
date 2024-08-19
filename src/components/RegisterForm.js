// src/components/RegisterForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from './AuthProvider';

function RegisterForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = register(username, password);
        if (success) {
            onClose(); // Close the form on successful registration
        } else {
            setError('Username already exists');
        }
    };

    return (
        <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: '8px', position: 'relative', width: '300px' }}>
            <IconButton
                onClick={onClose}
                sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h6" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 2 }}
                />
                {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default RegisterForm;
