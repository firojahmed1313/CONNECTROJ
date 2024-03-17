"use client"

const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLogIn, setIsLogIn] = useState(false);
    return (
        <AuthContext.Provider value={
            {
                user,
                setUser,
                isLogIn,
                setIsLogIn,
            }
        } >
            {children}
        </AuthContext.Provider>
    );
}