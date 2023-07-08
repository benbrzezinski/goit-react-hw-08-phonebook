import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/actions";
import scss from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <section>
      <h1 className={scss.formTitle}>Sign In</h1>
      <form className={scss.loginForm} onSubmit={handleSubmit}>
        <label className={scss.label}>
          <span className={scss.inputName}>E-mail</span>
          <input
            className={scss.input}
            type="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address"
            required
          />
        </label>
        <label className={scss.label}>
          <span className={scss.inputName}>Password</span>
          <input
            className={scss.input}
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contains at least 8 characters, including one letter and one number"
            required
          />
        </label>
        <button className={scss.btn} type="submit">
          Login
        </button>
      </form>
      <p className={scss.formInfo}>
        * password must contains at least 8 <span>characters</span>, including
        one letter and one <span>number</span>
      </p>
    </section>
  );
};

export default LoginForm;
