import { Helmet } from "react-helmet-async";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import ContactsList from "../components/ContactsList/ContactsList";

const Contacts = () => (
  <>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <AddContactForm />
    <ContactsList />
  </>
);

export default Contacts;
