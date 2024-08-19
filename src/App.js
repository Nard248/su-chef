// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthProvider } from './components/AuthProvider';  // Import AuthProvider
import './styles/animations.css';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/*
                      We can remove these routes if we are handling login/register
                      with modals as part of the navbar instead of separate pages
                    */}
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
