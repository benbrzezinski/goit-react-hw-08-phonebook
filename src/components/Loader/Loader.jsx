import { Watch } from "react-loader-spinner";
import PropTypes from "prop-types";
import scss from "./Loader.module.scss";

const Loader = ({ isLoading = true }) => (
  <Watch
    visible={isLoading}
    height="100"
    width="100"
    ariaLabel="watch-loading"
    wrapperClass={scss.loader}
    color="#822ab4"
  />
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
