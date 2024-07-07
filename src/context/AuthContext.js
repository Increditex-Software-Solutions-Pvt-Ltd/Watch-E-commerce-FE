import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider=({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); 
   
    useEffect(()=>{
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(token && userId){
            setIsAuthenticated(true);
            fetchUserData(token,userId)
        }
    },[]);
    
    const fetchUserData = async (token,userId) => {
        try {
             const response = await axios.get(`https://watch-e-commerce-be.onrender.com/users/${userId}`,{
                headers:{Authorization:`Bearer ${token}`}
             });
            setUser(response.data.user);
            
        } catch (error) {
            console.error("error fetching the user data",error);
        }
    }

    const login = (token,userId) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId',userId)
        setIsAuthenticated(true);
        fetchUserData(token,userId)
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}
