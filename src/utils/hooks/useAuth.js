import { useSelector } from "react-redux";
import {
  selectUser,
  selectError,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

const useAuth = () => {
  const user = useSelector(selectUser);
  const authError = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { user, authError, isLoggedIn, isRefreshing };
};

export default useAuth;
