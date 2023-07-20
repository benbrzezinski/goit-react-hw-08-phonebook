import { Helmet } from "react-helmet-async";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => (
  <>
    <Helmet>
      <title>Phonebook - Registration</title>
    </Helmet>
    <RegisterForm />
  </>
);

export default Register;
