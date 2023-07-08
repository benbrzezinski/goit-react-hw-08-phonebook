import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/actions";
import scss from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <section>
      <h1 className={scss.formTitle}>Registration</h1>
      <form className={scss.registerForm} onSubmit={handleSubmit}>
        <label className={scss.label}>
          <span className={scss.inputName}>Name</span>
          <input
            className={scss.input}
            type="text"
            name="name"
            pattern="^[A-Za-z]+(\s?[A-Za-z]+)*$"
            title="Only letters and spaces are allowed"
            required
          />
        </label>
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
          Register
        </button>
      </form>
      <p className={scss.formInfo}>
        * name can contains only letters and <span>spaces</span>
      </p>
      <p className={scss.formInfo}>
        * password must contains at least 8 <span>characters</span>, including
        one letter and one <span>number</span>
      </p>
    </section>
  );
};

export default RegisterForm;
