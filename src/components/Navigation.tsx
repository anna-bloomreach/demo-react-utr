import { NavLink } from "react-router";
import "../styles/index.css";

export function Navigation() {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/en/">
        Home
      </NavLink>
    </nav>
  );
}