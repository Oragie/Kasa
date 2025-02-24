import Logo from "../Logo"; // Importation du logo de l'application.
import { NavLink } from "react-router-dom";
import "./header.scss";

/**
 * Composant Header
 *
 * Ce composant représente la barre de navigation. le logo est cliquable qui renvois vers la page d'accueil,
 * Les liens Accueil et À Propos changent de style lorsque la page correspondante est active.
 */

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/" end>
            <Logo />
          </NavLink>
        </div>
        <nav>
          <ul className="nav__list--small">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                À Propos
              </NavLink>
            </li>
          </ul>
          <ul className="nav__list--large">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                À Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
