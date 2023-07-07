import scss from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <section>
      <h1 className={scss.formTitle}>Registration</h1>
      <form className={scss.form}>
        <label className={scss.label}>
          <span className={scss.inputName}>Name</span>
          <input
            className={scss.input}
            type="text"
            name="name"
            pattern="[A-Za-z ]+"
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
            title="Password must contain at least 8 characters, including one letter and one number"
            required
          />
        </label>
        <button className={scss.btn} type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
