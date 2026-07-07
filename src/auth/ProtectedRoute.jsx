import { Navigate, useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ children }) {
  const { activeUser } = useAuth();
  if (!activeUser) return <Navigate to="/pages/ProfilePage" replace />;

  return <>{children}</>;
}
