import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";
import { setIsContactEditing } from "../../redux/contacts/slice";
import EditContactForm from "../EditContactForm/EditContactForm";
import useContacts from "../../utils/hooks/useContacts";
import scss from "./ContactsItem.module.scss";

const ContactsItem = () => {
  const [editingContactId, setEditingContactId] = useState(null);
  const { filteredContacts } = useContacts();
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteContact(id));
  };

  const handleEditContact = e => {
    const id = e.currentTarget.dataset.id;
    setEditingContactId(id);
    dispatch(setIsContactEditing(true));
  };

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={scss.item} key={id}>
          <p className={scss.text}>
            <span className={scss.name}>Name: </span>
            {name}
          </p>
          <p className={scss.text}>
            <span className={scss.number}>Number: </span>
            {number}
          </p>
          <div className={scss.btnBox}>
            <button
              className={scss.deleteBtn}
              type="button"
              data-id={id}
              onClick={handleDeleteContact}
            >
              Delete
            </button>
            <button
              className={scss.editBtn}
              type="button"
              data-id={id}
              onClick={handleEditContact}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
      {editingContactId && (
        <EditContactForm editingContactId={editingContactId} />
      )}
    </>
  );
};

export default ContactsItem;
