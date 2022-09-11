import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (!auth.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}