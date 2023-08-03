import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = (initForm = {}, formValidationRules = {}) => {
  const [formState, setForm] = useState(initForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setForm(initForm);
  }, [initForm]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...formState,
      [name]: value,
    });
  };

  const isFormValid = useMemo(() => {
    return Object.values(formValidation).every((error) => error === null);
  }, [formValidation]);

  const onResetForm = () => {
    setForm(initForm);
  };

  const createValidators = () => {
    const formCheckValidation = {};

    for (let key in formValidationRules) {
      const [validationFn, message] = formValidationRules[key];

      formCheckValidation[`${key}Validation`] = validationFn(formState[key])
        ? null
        : message;
    }
    setFormValidation(formCheckValidation);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
