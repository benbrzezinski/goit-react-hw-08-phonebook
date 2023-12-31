import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../utils/hooks/useAuth";

const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.node.isRequired,
};

export default RestrictedRoute;
