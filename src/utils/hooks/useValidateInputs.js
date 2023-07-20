import { toast } from "react-toastify";

const useValidateInputs = () => {
  const validateUsername = username => {
    const requirements = {
      length: username.length >= 3 && username.length <= 25,
      format: /^[A-Za-z]+(\s?[A-Za-z]+)*$/.test(username),
    };

    const failedRequirements = Object.keys(requirements).filter(
      requirement => !requirements[requirement]
    );

    if (failedRequirements.includes("length")) {
      return toast.error("Username length must be from 3 to 25 characters");
    }

    if (failedRequirements.includes("format")) {
      return toast.error("Enter a valid username");
    }

    return false;
  };

  const validateEmail = email => {
    const requirements = {
      format: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email),
    };

    if (!requirements.format) {
      return toast.error("Enter a valid e-mail address");
    }

    return false;
  };

  const validatePassword = password => {
    const requirements = {
      length: password.length >= 8,
      letter: /[A-Za-z]/.test(password),
      number: /\d/.test(password),
    };

    const failedRequirements = Object.keys(requirements).filter(
      requirement => !requirements[requirement]
    );

    if (failedRequirements.includes("length")) {
      return toast.error("Password must contain at least 8 characters");
    }

    if (failedRequirements.includes("letter")) {
      return toast.error("Password must contain at least one letter");
    }

    if (failedRequirements.includes("number")) {
      return toast.error("Password must contain at least one number");
    }

    return false;
  };

  const validateName = name => {
    const requirements = {
      format: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name),
    };

    if (!requirements.format) {
      return toast.error("Enter a valid name");
    }

    return false;
  };

  const validateNumber = number => {
    const requirements = {
      format:
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
          number
        ),
    };

    if (!requirements.format) {
      return toast.error("Enter a valid phone number");
    }

    return false;
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
