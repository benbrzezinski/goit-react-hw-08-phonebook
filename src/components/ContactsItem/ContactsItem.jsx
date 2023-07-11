import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";
import useContacts from "../../utils/hooks/useContacts";
import scss from "./ContactsItem.module.scss";

const ContactsItem = () => {
  const { filteredContacts } = useContacts();
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
        className={scss.deleteBtn}
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
