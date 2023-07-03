import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/actions";
import scss from "./ContactsItem.module.scss";

const ContactsItem = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteContact(id));
  };

  return filteredContacts.map(({ id, name, number }) => (
    <li className={scss.item} key={id}>
      <p className={scss.text}>
        <span className={scss.name}>Name: </span>
        {name}
      </p>
      <p className={scss.text}>
        <span className={scss.number}>Number: </span>
        {number}
      </p>
      <button
        className={scss.btn}
        type="button"
        data-id={id}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  ));
};

export default ContactsItem;
