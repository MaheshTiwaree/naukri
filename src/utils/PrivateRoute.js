import { IsAuth } from './Auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const auth = IsAuth();
  return auth ? children : <Navigate to="/" />;
};
