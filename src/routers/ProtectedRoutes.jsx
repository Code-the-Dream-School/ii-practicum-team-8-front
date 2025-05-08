import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
  const { user, token } = useAuth(); 

  return user && token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
