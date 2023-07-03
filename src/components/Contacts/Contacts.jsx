import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsLoading } from "../../redux/selectors";
import { getContacts } from "../../redux/actions";
import Filter from "../Filter/Filter";
import ContactsItem from "../ContactsItem/ContactsItem";
import Notification from "../Notification/Notification";
import scss from "./Contacts.module.scss";

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};

export default Contacts;
