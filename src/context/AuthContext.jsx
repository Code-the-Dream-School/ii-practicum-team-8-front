import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => Cookies.get('user') || null);
  const [token, setToken] = useState(() => Cookies.get('token') || null);

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    Cookies.set('token', token, { expires: 7 });
    Cookies.set('user', user, { expires: 7 });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove('token');
    Cookies.remove('user');
  };

  useEffect(() => {
    const savedToken = Cookies.get('token');
    if (savedToken && !token) {
      setToken(savedToken);
    }
    const savedUser = Cookies.get('user');
    if (savedUser && !user) {
      setToken(savedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};