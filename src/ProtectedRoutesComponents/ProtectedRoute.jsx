import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.user !== null);

  const location = useLocation();

return isAuthenticated ? (
  <Outlet />
) : (
  <Navigate to="/login" state={{ from: location.pathname }} replace />
);
};

export default ProtectedRoute;
