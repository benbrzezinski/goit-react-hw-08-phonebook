import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import useAuth from "../../utils/hooks/useAuth";
import clsx from "clsx";
import scss from "./NavigationBar.module.scss";

const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={scss.nav}>
      <ul className={scss.mainNavList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(scss.mainNavLink, { [scss.isActive]: isActive })
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="contacts"
              className={({ isActive }) =>
                clsx(scss.mainNavLink, { [scss.isActive]: isActive })
              }
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default NavigationBar;
