import { useState, useEffect } from 'react';
import { login, logout } from '../services/auth';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if user is already authenticated
      const isAuthenticated = await login();
      setIsAuthenticated(isAuthenticated);
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  const handleLogin = async (username: string, password: string) => {
    const isAuthenticated = await login(username, password);
    setIsAuthenticated(isAuthenticated);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, handleLogin, handleLogout };
};

export default useAuth;