import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { getContacts } from "../../redux/contacts/actions";
import Filter from "../Filter/Filter";
import ContactsItem from "../ContactsItem/ContactsItem";
import Notification from "../Notification/Notification";
import scss from "./ContactsList.module.scss";

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <section>
      <h2 className={scss.title}>Contacts</h2>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ul className={scss.contacts}>
            <ContactsItem />
          </ul>
        </>
      )}
      {!contacts.length && !isLoading && <Notification />}
    </section>
  );
};

export default ContactsList;
