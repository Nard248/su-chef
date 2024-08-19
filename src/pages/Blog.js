// src/pages/Blog.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout';  // Import Layout component

function Blog() {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Blog Page
                    </Typography>
                </Box>
            </Container>
        </Layout>
    );
}

export default Blog;
