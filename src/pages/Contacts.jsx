import { HelmetProvider, Helmet } from "react-helmet-async";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import ContactsList from "../components/ContactsList/ContactsList";

const Contacts = () => (
  <HelmetProvider>
    <Helmet>
      <title>Phonebook</title>
    </Helmet>
    <AddContactForm />
    <ContactsList />
  </HelmetProvider>
);

export default Contacts;
