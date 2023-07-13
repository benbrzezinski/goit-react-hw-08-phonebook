import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addContact } from "../../redux/contacts/actions";
import useContacts from "../../utils/hooks/useContacts";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import scss from "./AddContactForm.module.scss";

const AddContactForm = () => {
  const [values, setValues] = useState({ name: "", number: "" });
  const { contacts } = useContacts();
  const { validateName, validateNumber } = useValidateInputs();
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const {
      elements: { name, number },
    } = e.currentTarget;

    const contactsNames = contacts.map(({ name }) => name);

    if (contactsNames.includes(values.name)) {
      return toast.error(`${values.name} is already in contacts ⚠`);
    }

    if (!validateName(values.name)) {
      name.focus();
      return toast.error("Name validation failed ⚠");
    }

    if (!validateNumber(values.number)) {
      number.focus();
      return toast.error("Number validation failed ⚠");
    }

    dispatch(addContact(values));
    setValues({ name: "", number: "" });
  };

  return (
    <section className={scss.section}>
      <h1 className={scss.formTitle}>Phonebook</h1>
      <form className={scss.contactForm} onSubmit={handleSubmit}>
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
        </label>
        <button className={scss.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

export default AddContactForm;
