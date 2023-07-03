import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import scss from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <p className={scss.text}>Find contacts by name</p>
      <input
        className={scss.filter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
