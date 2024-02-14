import { useCallback, useEffect, useState } from 'react';
import { validator } from '../utils/validators.ts';
import { IFormValues, ValueOf } from '../interfaces.ts';

const defaultFormValues = {
  age: 0,
  date: '',
  email: '',
  firstName: '',
  lastName: '',
  photo: null,
  time: '',
};

const useValidate = () => {
  const [formValues, setFormValues] = useState<IFormValues>(defaultFormValues);
  const [showValidationError, setShowValidationError] = useState<{ [key in keyof IFormValues]: boolean }>({
    age: false,
    date: false,
    email: false,
    firstName: false,
    lastName: false,
    photo: false,
    time: false,
  });

  const [isDirty, setIsDirty] = useState<{ [key in keyof IFormValues]: boolean }>({
    age: false,
    date: false,
    email: false,
    firstName: false,
    lastName: false,
    photo: false,
    time: false,
  });

  const changeFormValue = (prop: keyof IFormValues, value: ValueOf<IFormValues>) => {
    setFormValues({ ...formValues, [prop]: value });
  };

  const checkValidation = useCallback((prop: keyof IFormValues, value: string | File) => {
    let result: boolean = false;

    console.log(value);
    console.log(typeof value);
    if ((typeof value === 'string' && value.length > 2) || value instanceof File) {
      result = validator[prop](value as string & File);
    }

    return result;
  }, []);

  const clearValues = () => {
    setFormValues(defaultFormValues);
  };

  const allInputsAreValid =
    Object.values(isDirty).every(value => value) && Object.values(showValidationError).every(value => !value);

  useEffect(() => {
    Object.entries(formValues).forEach(([key, value]) => {
      if ((typeof value === 'string' && value.length) || (value instanceof File && value.size > 0)) {
        setIsDirty({ ...isDirty, [key]: true });
      }

      if (isDirty[key as keyof IFormValues]) {
        setShowValidationError(currVal => ({ ...currVal, [key]: !checkValidation(key as keyof IFormValues, value) }));
      }
    });
  }, [formValues, checkValidation]);

  return { formValues, checkValidation, clearValues, changeFormValue, allInputsAreValid, showValidationError };
};

export default useValidate;
