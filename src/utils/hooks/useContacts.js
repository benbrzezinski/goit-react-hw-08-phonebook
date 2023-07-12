import { useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isContactsLoading = useSelector(selectIsLoading);
  const contactsError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return { contacts, isContactsLoading, contactsError, filteredContacts };
};

export default useContacts;
