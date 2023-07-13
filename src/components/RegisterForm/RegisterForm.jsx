import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useAuthPending from "../../utils/hooks/useAuthPending";
import usePasswordVisibility from "../../utils/hooks/usePasswordVisibility";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import clsx from "clsx";
import scss from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const { isAuthPending } = useAuth();
  const { AuthPendingIcon } = useAuthPending();
  const { PasswordIcon, passwordRef, togglePasswordVisibility } =
    usePasswordVisibility();
  const { validateUsername, validateEmail, validatePassword } =
    useValidateInputs();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.elements.username;
    const email = form.elements.email;
    const password = form.elements.password;

    if (!validateUsername(username.value)) {
      username.focus();
      return toast.error("Username validation failed ⚠");
    }

    if (!validateEmail(email.value)) {
      email.focus();
      return toast.error("E-mail validation failed ⚠");
    }

    if (!validatePassword(password.value)) {
      password.focus();
      return toast.error("Password validation failed ⚠");
    }

    dispatch(
      register({
        name: username.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <section>
      <h1 className={scss.formTitle}>Registration</h1>
      <form className={scss.registerForm} onSubmit={handleSubmit}>
        <label className={scss.label}>
          <span className={scss.fieldName}>Username</span>
          <input
            className={scss.input}
            type="text"
            name="username"
            maxLength={25}
            title="Only letters and spaces are allowed"
            required
          />
        </label>
        <label className={scss.label}>
          <span className={scss.fieldName}>E-mail</span>
          <input
            className={scss.input}
            type="email"
            name="email"
            title="Enter a valid e-mail address"
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
            "Register"
          )}
        </button>
      </form>
      <p className={scss.formInfo}>
        * username can contains only letters and <span>spaces</span>
      </p>
      <p className={scss.formInfo}>
        * password must contains at least 8 <span>characters</span>, including
        one letter and one <span>number</span>
      </p>
    </section>
  );
};

export default RegisterForm;
