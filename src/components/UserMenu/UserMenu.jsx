import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useIcons from "../../utils/hooks/useIcons";
import scss from "./UserMenu.module.scss";

const UserMenu = () => {
  const { user, isAuthPending } = useAuth();
  const { AuthPendingIcon, LogOutIcon } = useIcons();
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
          <LogOutIcon className={scss.logoutIcon} />
        )}
      </button>
    </div>
  );
};

export default UserMenu;
