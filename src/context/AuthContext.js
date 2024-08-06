import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CartContext, RESET_CART } from './CartContext';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // const { dispatch: cartDispatch } = useContext(CartContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      setIsAuthenticated(true);
      fetchUserData(token, userId);
    }
  }, []);

  const fetchUserData = async (token, userId) => {
    try {
      const response = await axios.get(`https://watch-e-commerce-be-e9sn.onrender.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.error("Error fetching the user data:", error.response ? error.response.data : error.message);
    }
  };

  const login = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    fetchUserData(token, userId);
    navigate('/');
  };

  const logout = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      localStorage.removeItem(`cart_${userId}`);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUser(null);
    // cartDispatch({ type: RESET_CART });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
