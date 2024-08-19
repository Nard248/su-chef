// src/pages/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout';  // Import Layout component


function Home() {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to Su-Chef
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Discover our unique gourmet foods and enjoy our flexible services.
                    </Typography>
                </Box>
            </Container>
        </Layout>
    );
}

export default Home;
