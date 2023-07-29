import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
import { logOut } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useAuthPending from "../../utils/hooks/useAuthPending";
import scss from "./Home.module.scss";

const Home = () => {
  const { isLoggedIn, isAuthPending } = useAuth();
  const { AuthPendingIcon } = useAuthPending();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={scss.box}>
        <h1 className={scss.title}>
          <p>Unlock the Power</p>
          <p>of Your Phonebook ☎</p>
        </h1>
        <div className={scss.linkBox}>
          {isLoggedIn ? (
            <>
              <Link to="contacts" className={scss.link}>
                Contacts
                <IconContext.Provider value={{ className: scss.icon }}>
                  <RiContactsBook2Line />
                </IconContext.Provider>
              </Link>
              <button
                className={scss.link}
                type="button"
                onClick={handleLogOut}
              >
                {isAuthPending ? (
                  <AuthPendingIcon className={scss.authPendingIcon} />
                ) : (
                  <>
                    Logout
                    <IconContext.Provider value={{ className: scss.icon }}>
                      <LuLogOut />
                    </IconContext.Provider>
                  </>
                )}
              </button>
            </>
          ) : (
            <>
              <Link to="register" className={scss.link}>
                Register
                <IconContext.Provider value={{ className: scss.icon }}>
                  <MdAppRegistration />
                </IconContext.Provider>
              </Link>
              <Link to="login" className={scss.link}>
                Login
                <IconContext.Provider value={{ className: scss.icon }}>
                  <LuLogIn />
                </IconContext.Provider>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
