import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/actions";
import Filter from "../Filter/Filter";
import ContactsItem from "../ContactsItem/ContactsItem";
import Notification from "../Notification/Notification";
import useContacts from "../../utils/hooks/useContacts";
import scss from "./ContactsList.module.scss";

const ContactsList = () => {
  const { contacts, isContactsLoading } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <section className={scss.wrapper}>
      <h2 className={scss.title}>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ul className={scss.contacts}>
            <ContactsItem />
          </ul>
        </>
      )}
      {!contacts.length && !isContactsLoading && <Notification />}
    </section>
  );
};

export default ContactsList;
