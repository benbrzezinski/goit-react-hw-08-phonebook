const useValidateInputs = () => {
  const validateUsername = username => {
    return username.match(/^[A-Za-z]+(\s?[A-Za-z]+)*$/);
  };

  const validateEmail = email => {
    return email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  };

  const validatePassword = password => {
    return password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  };

  const validateName = name => {
    return name.match(/^[a-zA-Z]+((['-][a-zA-Z ])?[a-zA-Z]*)*$/);
  };

  const validateNumber = number => {
    return number.match(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    );
  };

  return {
    validateUsername,
    validateEmail,
    validatePassword,
    validateName,
    validateNumber,
  };
};

export default useValidateInputs;
