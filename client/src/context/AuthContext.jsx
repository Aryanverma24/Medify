import React from 'react'
import { createContext, useState , useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchUser = async() => {
        try {
            const res = await API.get("/auth/me");
            setUser(res.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
            fetchUser();
        } else {
            setLoading(false);
        }
    },[]);


    const loginUser = (token) => {
        localStorage.setItem("token", token);
        fetchUser();
    }

    const logoutUser = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, loading, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )

}

