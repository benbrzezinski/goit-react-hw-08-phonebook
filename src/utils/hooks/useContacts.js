import { useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectIsEditing,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";

const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isContactsLoading = useSelector(selectIsLoading);
  const isContactEditing = useSelector(selectIsEditing);
  const contactsError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    contacts,
    isContactsLoading,
    isContactEditing,
    contactsError,
    filteredContacts,
  };
};

export default useContacts;
