import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addContact } from "../../redux/contacts/actions";
import useContacts from "../../utils/hooks/useContacts";
import useIcons from "../../utils/hooks/useIcons";
import useReadMore from "../../utils/hooks/useReadMore";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import scss from "./AddContactForm.module.scss";

const AddContactForm = () => {
  const [values, setValues] = useState({ name: "", number: "" });
  const { contacts } = useContacts();
  const { NameIcon, PhoneIcon } = useIcons();
  const { readMore, toggleReadMore } = useReadMore();
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
    const contactsNumbers = contacts.map(({ number }) => number);

    if (contactsNames.includes(values.name)) {
      name.focus();
      return toast.error(`${values.name} is already in contacts`);
    }

    if (contactsNumbers.includes(values.number)) {
      number.focus();

      const contactNameByNumber = contacts.find(
        ({ number }) => number === values.number
      ).name;

      return toast.error(
        `There is already a contact with the number ${values.number}: ${contactNameByNumber}`
      );
    }

    if (validateName(values.name)) {
      return name.focus();
    }

    if (validateNumber(values.number)) {
      return number.focus();
    }

    dispatch(addContact(values));
    setValues({ name: "", number: "" });
  };

  return (
    <section className={scss.section}>
      <div>
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
              placeholder="Emily Johnson"
              required
            />
            <button className={scss.iconBtn} type="button">
              <NameIcon className={scss.icon} />
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
              placeholder="+48 777 777 777"
              required
            />
            <button className={scss.iconBtn} type="button">
              <PhoneIcon className={scss.icon} />
            </button>
          </label>
          <button className={scss.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
      <button className={scss.readMore} type="button" onClick={toggleReadMore}>
        {readMore ? "Validation requirements <<" : "Validation requirements >>"}
      </button>
      {readMore ? (
        <div className={scss.formInfoBox}>
          <p className={scss.formInfo}>
            * name may contain only letters,{" "}
            <span>
              apostrophe, dash and spaces, but spaces not at the beginning and
              at the end
            </span>
          </p>
          <p className={scss.formInfo}>
            * phone number must be digits and can{" "}
            <span>
              contain spaces, dashes, parentheses and can start with +
            </span>
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default AddContactForm;
