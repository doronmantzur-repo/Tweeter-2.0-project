import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { useAuth } from "../auth/AuthProvider";

export default function Navbar() {
  const { onLogout } = useAuth();
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pages/ProfilePage">Profile</NavLink>
        </li>
      </ul>
      <div className="logout" onClick={onLogout}>
        <p>Logout</p>
      </div>
    </nav>
  );
}
