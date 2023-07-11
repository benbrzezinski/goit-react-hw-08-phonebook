import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/actions";
import usePasswordVisibility from "../../utils/hooks/usePasswordVisibility";
import clsx from "clsx";
import scss from "./LoginForm.module.scss";

const LoginForm = () => {
  const { PasswordIcon, passwordRef, togglePasswordVisibility } =
    usePasswordVisibility();
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
          <span className={scss.fieldName}>E-mail</span>
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
          <span className={scss.fieldName}>Password</span>
          <input
            className={clsx(scss.input, scss.passwordInput)}
            ref={passwordRef}
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contains at least 8 characters, including one letter and one number"
            required
          />
          <button
            className={scss.passwordBtn}
            type="button"
            onClick={togglePasswordVisibility}
          >
            <PasswordIcon className={scss.passwordIcon} />
          </button>
        </label>
        <button className={scss.submitBtn} type="submit">
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
