import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useAuthPending from "../../utils/hooks/useAuthPending";
import usePasswordVisibility from "../../utils/hooks/usePasswordVisibility";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import clsx from "clsx";
import scss from "./LoginForm.module.scss";

const LoginForm = () => {
  const { isAuthPending } = useAuth();
  const { AuthPendingIcon } = useAuthPending();
  const { PasswordIcon, passwordRef, togglePasswordVisibility } =
    usePasswordVisibility();
  const { validateEmail, validatePassword } = useValidateInputs();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.email;
    const password = form.elements.password;

    if (!validateEmail(email.value)) {
      email.focus();
      return toast.error("Email validation failed ⚠");
    }

    if (!validatePassword(password.value)) {
      password.focus();
      return toast.error("Password validation failed ⚠");
    }

    dispatch(logIn({ email: email.value, password: password.value }));
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
          {isAuthPending ? (
            <AuthPendingIcon className={scss.authPendingIcon} />
          ) : (
            "Login"
          )}
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
