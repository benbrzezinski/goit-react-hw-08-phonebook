import { HelmetProvider, Helmet } from "react-helmet-async";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => (
  <HelmetProvider>
    <Helmet>
      <title>Sign In - Phonebook</title>
    </Helmet>
    <LoginForm />
  </HelmetProvider>
);

export default Login;
