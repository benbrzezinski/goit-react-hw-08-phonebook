import { useDispatch } from "react-redux";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useAuthPending from "../../utils/hooks/useAuthPending";
import scss from "./UserMenu.module.scss";

const UserMenu = () => {
  const { user, isAuthPending } = useAuth();
  const { IconContext, AuthPendingIcon } = useAuthPending();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={scss.userMenu}>
      <p className={scss.userName}>{user.name}</p>
      <button className={scss.logoutBtn} type="button" onClick={handleLogOut}>
        {isAuthPending ? (
          <AuthPendingIcon className={scss.authPendingIcon} />
        ) : (
          <IconContext.Provider value={{ className: scss.logoutIcon }}>
            <LuLogOut />
          </IconContext.Provider>
        )}
      </button>
    </div>
  );
};

export default UserMenu;
