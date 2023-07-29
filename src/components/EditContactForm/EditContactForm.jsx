import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { updateContact } from "../../redux/contacts/actions";
import { setIsContactEditing } from "../../redux/contacts/slice";
import useContacts from "../../utils/hooks/useContacts";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import clsx from "clsx";
import scss from "./EditContactForm.module.scss";

const EditContactForm = ({ editingContactId }) => {
  const [values, setValues] = useState({ name: "", number: "" });
  const { contacts, isContactEditing } = useContacts();
  const { validateName, validateNumber } = useValidateInputs();
  const dispatch = useDispatch();

  useEffect(() => {
    const editingContact = contacts.find(({ id }) => id === editingContactId);

    if (editingContact) {
      const editingContactWithoutId = Object.entries(editingContact).toSpliced(
        0,
        1
      );
      setValues(Object.fromEntries(editingContactWithoutId));
    }
  }, [contacts, editingContactId]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const {
      elements: { name, number },
    } = e.currentTarget;

    if (validateName(values.name)) {
      return name.focus();
    }

    if (validateNumber(values.number)) {
      return number.focus();
    }

    dispatch(updateContact({ id: editingContactId, credentials: values }));
    dispatch(setIsContactEditing(false));
  };

  const cancelEditingOnBtn = () => {
    dispatch(setIsContactEditing(false));
  };

  const cancelEditingOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      dispatch(setIsContactEditing(false));
    }
  };

  return (
    <div
      className={clsx(scss.backdrop, { [scss.isEditing]: isContactEditing })}
      onClick={cancelEditingOnBackdrop}
    >
      <form className={scss.editContactForm} onSubmit={handleSubmit}>
        <label className={scss.label}>
          <span className={scss.fieldName}>Name</span>
          <input
            className={scss.input}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button className={scss.iconBtn} type="button">
            <IconContext.Provider value={{ className: scss.icon }}>
              <MdDriveFileRenameOutline />
            </IconContext.Provider>
          </button>
        </label>
        <label className={scss.label}>
          <span className={scss.fieldName}>Number</span>
          <input
            className={scss.input}
            type="tel"
            name="number"
            value={values.number}
            onChange={handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={scss.iconBtn} type="button">
            <IconContext.Provider value={{ className: scss.icon }}>
              <AiOutlinePhone />
            </IconContext.Provider>
          </button>
        </label>
        <div className={scss.btnBox}>
          <button
            className={scss.cancelBtn}
            type="button"
            onClick={cancelEditingOnBtn}
          >
            Cancel
          </button>
          <button className={scss.submitBtn} type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

EditContactForm.propTypes = {
  editingContactId: PropTypes.string.isRequired,
};

export default EditContactForm;
