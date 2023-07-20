import { Helmet } from "react-helmet-async";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => (
  <>
    <Helmet>
      <title>Phonebook - Sign In</title>
    </Helmet>
    <LoginForm />
  </>
);

export default Login;
