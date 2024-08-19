// src/components/AuthProvider.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [users, setUsers] = useState([
        { username: 'john_doe', password: 'password123' },  // Dummy user 1
        { username: 'jane_doe', password: 'mypassword' },   // Dummy user 2
    ]);
    const [currentUser, setCurrentUser] = useState(null);

    const login = (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        } else {
            return false;
        }
    };

    const register = (username, password) => {
        const userExists = users.some(u => u.username === username);
        if (userExists) {
            return false;
        } else {
            const newUser = { username, password };
            setUsers([...users, newUser]);
            setCurrentUser(newUser);
            return true;
        }
    };

    return (
        <AuthContext.Provider value={{ users, currentUser, login, register }}>
            {children}
        </AuthContext.Provider>
    );
}
