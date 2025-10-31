import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; 

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "badge" : ""}`;

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Bloc logo */}
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="Trouve ton artisan"
            style={{ height: "45px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Bloc navigation */}
        <nav className="nav">
          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/batiment" className={linkClass}>
            Bâtiment
          </NavLink>
          <NavLink to="/fabrication" className={linkClass}>
            Fabrication
          </NavLink>
          <NavLink to="/alimentation" className={linkClass}>
            Alimentation
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
