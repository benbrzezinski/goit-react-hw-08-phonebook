import { NavLink } from "react-router-dom";
import clsx from "clsx";
import scss from "./AuthNav.module.scss";

const AuthNav = () => (
  <ul className={scss.authNavList}>
    <li>
      <NavLink
        to="register"
        className={({ isActive }) =>
          clsx(scss.authNavLink, { [scss.isActive]: isActive })
        }
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        to="login"
        className={({ isActive }) =>
          clsx(scss.authNavLink, { [scss.isActive]: isActive })
        }
      >
        LogIn
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
