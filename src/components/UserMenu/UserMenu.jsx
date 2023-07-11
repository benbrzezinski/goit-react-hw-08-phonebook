import { useDispatch } from "react-redux";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import scss from "./UserMenu.module.scss";

const UserMenu = () => {
  const {
    user: { name },
  } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={scss.userMenu}>
      <p className={scss.userName}>{name}</p>
      <button className={scss.logoutBtn} type="button" onClick={handleLogOut}>
        <LuLogOut />
      </button>
    </div>
  );
};

export default UserMenu;
