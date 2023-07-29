import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
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

    if (validateEmail(email.value)) {
      return email.focus();
    }

    if (validatePassword(password.value)) {
      return password.focus();
    }

    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <section className={scss.section}>
      <div>
        <h1 className={scss.formTitle}>Sign In</h1>
        <form className={scss.loginForm} onSubmit={handleSubmit}>
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
              <IconContext.Provider value={{ className: scss.icon }}>
                <AiOutlineMail />
              </IconContext.Provider>
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
              "Login"
            )}
          </button>
          <Link to="/register" className={scss.formLink}>
            You don&#39;t have an account? Create here
          </Link>
        </form>
      </div>
      <div>
        <p className={scss.formInfo}>
          * password must contain at least 8{" "}
          <span>characters, including one letter and one number</span>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
