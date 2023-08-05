import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/actions";
import useAuth from "../../utils/hooks/useAuth";
import useIcons from "../../utils/hooks/useIcons";
import usePasswordVisibility from "../../utils/hooks/usePasswordVisibility";
import useReadMore from "../../utils/hooks/useReadMore";
import useValidateInputs from "../../utils/hooks/useValidateInputs";
import clsx from "clsx";
import scss from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const { isAuthPending } = useAuth();
  const { AuthPendingIcon, UserIcon, EmailIcon } = useIcons();
  const { PasswordIcon, passwordRef, togglePasswordVisibility } =
    usePasswordVisibility();
  const { readMore, toggleReadMore } = useReadMore();
  const { validateUsername, validateEmail, validatePassword } =
    useValidateInputs();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const username = form.elements.username;
    const email = form.elements.email;
    const password = form.elements.password;

    if (validateUsername(username.value)) {
      return username.focus();
    }

    if (validateEmail(email.value)) {
      return email.focus();
    }

    if (validatePassword(password.value)) {
      return password.focus();
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
    <section className={scss.section}>
      <div>
        <h1 className={scss.formTitle}>Registration</h1>
        <form className={scss.registerForm} onSubmit={handleSubmit}>
          <label className={scss.label}>
            <span className={scss.fieldName}>Username</span>
            <input
              className={scss.input}
              type="text"
              name="username"
              title="Only letters and spaces are allowed"
              placeholder="Emily Johnson"
              required
            />
            <button className={clsx(scss.iconBtn, scss.btn)} type="button">
              <UserIcon className={scss.icon} />
            </button>
          </label>
          <label className={scss.label}>
            <span className={scss.fieldName}>E-mail</span>
            <input
              className={scss.input}
              type="email"
              name="email"
              title="Enter a valid e-mail address"
              placeholder="example@email.com"
              required
            />
            <button className={clsx(scss.iconBtn, scss.btn)} type="button">
              <EmailIcon className={scss.icon} />
            </button>
          </label>
          <label className={scss.label}>
            <span className={scss.fieldName}>Password</span>
            <input
              className={scss.input}
              ref={passwordRef}
              type="password"
              name="password"
              title="Password must contain at least 8 characters, including one letter and one number"
              required
            />
            <button
              className={scss.iconBtn}
              type="button"
              onClick={togglePasswordVisibility}
            >
              <PasswordIcon className={scss.icon} />
            </button>
          </label>
          <button className={scss.submitBtn} type="submit">
            {isAuthPending ? (
              <AuthPendingIcon className={scss.authPendingIcon} />
            ) : (
              "Register"
            )}
          </button>
          <Link to="/login" className={scss.formLink}>
            Already have an account? Sign in here
          </Link>
        </form>
      </div>
      <button className={scss.readMore} type="button" onClick={toggleReadMore}>
        {readMore ? "Validation requirements <<" : "Validation requirements >>"}
      </button>
      {readMore ? (
        <div className={scss.formInfoBox}>
          <p className={scss.formInfo}>
            * username can contain only letters and{" "}
            <span>
              spaces, but spaces not at the beginning and at the end, the length{" "}
              must be from 3 to 25 characters
            </span>
          </p>
          <p className={scss.formInfo}>
            * password must contain at least 8{" "}
            <span>characters, including one letter and one number</span>
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default RegisterForm;
