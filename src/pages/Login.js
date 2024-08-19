// src/pages/Login.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout';  // Import Layout component

function Login() {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Login Page
                    </Typography>
                </Box>
            </Container>
        </Layout>
    );
}

export default Login;
