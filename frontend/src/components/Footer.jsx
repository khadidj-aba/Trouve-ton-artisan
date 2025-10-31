// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="dotted" aria-hidden="true" />

      <nav className="legal-links" aria-label="Liens légaux">
        <ul>
          {/* Mentions légales */}
          <li>
            <Link to="/mentions" className="footer-link">
              Mentions légales
            </Link>
          </li>

          {/* Données personnelles*/}
          <li>
            <Link to="/donnees-personnelles" className="footer-link">
              Données personnelles
            </Link>
          </li>

          {/* Accessibilité -> Page en construction */}
          <li>
            <Link to="/construction" className="footer-link">
              Accessibilité
            </Link>
          </li>

          {/* Cookies -> Page en construction */}
          <li>
            <Link to="/construction" className="footer-link">
              Cookies
            </Link>
          </li>
        </ul>
      </nav>

      <div className="dotted" aria-hidden="true" />

      <address className="org-address">
        101 cours Charlemagne<br />
        CS 20033<br />
        69269 LYON CEDEX 02
      </address>
    </footer>
  );
}
