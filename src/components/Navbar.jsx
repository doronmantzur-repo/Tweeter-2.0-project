import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
