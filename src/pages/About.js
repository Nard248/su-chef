// src/pages/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout';  // Import Layout component

function About() {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" component="p">
                    Su-Chef is a unique gourmet food store...
                </Typography>
            </Container>
        </Layout>
    );
}

export default About;
