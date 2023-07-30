import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { logOut } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useIcons from "../../utils/hooks/useIcons";
import scss from "./Home.module.scss";

const Home = () => {
  const { isLoggedIn, isAuthPending } = useAuth();
  const { AuthPendingIcon, ContactsIcon, LogOutIcon, RegisterIcon, LogInIcon } =
    useIcons();
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
          <p>of Your Phonebook</p>
        </h1>
        <div className={scss.linkBox}>
          {isLoggedIn ? (
            <>
              <Link to="contacts" className={scss.link}>
                Contacts <ContactsIcon className={scss.icon} />
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
                    Logout <LogOutIcon className={scss.icon} />
                  </>
                )}
              </button>
            </>
          ) : (
            <>
              <Link to="register" className={scss.link}>
                Register <RegisterIcon className={scss.icon} />
              </Link>
              <Link to="login" className={scss.link}>
                Login <LogInIcon className={scss.icon} />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
