import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('userToken'));
    
    const logout = () => {
        localStorage.removeItem('userToken');
        setIsAuthenticated(false);
        
    };
    const value = {
        isAuthenticated,
        setIsAuthenticated,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
