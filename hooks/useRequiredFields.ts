import { useState } from 'react';

const useRequiredFields = () => {
  const [errors, setErrors] = useState<any>({});

  const checkFields = (fields: any, otherErrors: any) => {
    const defaultErrors: any = { ...otherErrors };
    for (let key in fields) {
      if (!fields[key]) defaultErrors[key] = 'Field is required.';
    }
    setErrors(defaultErrors);
    return defaultErrors;
  };

  const hasAnyError = (errors: any) => Object.keys(errors).length > 0;

  return { errors, hasAnyError, setErrors, checkFields };
};

export default useRequiredFields;
