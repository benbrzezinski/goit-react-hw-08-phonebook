import { HelmetProvider, Helmet } from "react-helmet-async";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => (
  <HelmetProvider>
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <RegisterForm />
  </HelmetProvider>
);

export default Register;
