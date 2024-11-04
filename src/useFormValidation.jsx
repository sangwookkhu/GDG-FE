import { useState } from 'react';

// 유효성 검사 규칙
const validationRules = {
  email: (value) => /\S+@\S+\.\S+/.test(value) || 'Invalid email format',
  password: (value) => value.length >= 8 || 'Password must be at least 8 characters',
  date: (value) => !isNaN(Date.parse(value)) || 'Invalid date format',
};

export const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const validationRule = validationRules[name];
    if (validationRule) {
      const isValid = validationRule(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: typeof isValid === 'string' ? isValid : '',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    let valid = true;

    Object.keys(values).forEach((key) => {
      const isValid = validationRules[key]?.(values[key]);
      if (typeof isValid === 'string') {
        valid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: isValid,
        }));
      }
    });

    if (valid) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
