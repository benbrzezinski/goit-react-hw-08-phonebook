import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/actions";
import { toast } from "react-toastify";
import scss from "./AddContactForm.module.scss";

const AddContactForm = () => {
  const [values, setValues] = useState({ name: "", number: "" });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactsNames = contacts.map(({ name }) => name);

    if (contactsNames.includes(values.name)) {
      return toast.error(`${values.name} is already in contacts ☎`);
    }

    dispatch(addContact(values));
    setValues({ name: "", number: "" });
  };

  return (
    <section className={scss.section}>
      <h1 className={scss.formTitle}>Phonebook</h1>
      <form className={scss.form} onSubmit={handleSubmit}>
        <label className={scss.label}>
          <span className={scss.inputName}>Name</span>
          <input
            className={scss.input}
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={scss.label}>
          <span className={scss.inputName}>Number</span>
          <input
            className={scss.input}
            type="tel"
            name="number"
            value={values.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={scss.btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

export default AddContactForm;
