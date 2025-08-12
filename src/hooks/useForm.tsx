import { useState, type ChangeEvent } from "react";

const useForm = <T extends Record<string, string | number | boolean>>(
  initialState: T
) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearField = (field: keyof T) => {
    setFormData((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, clearField, resetForm };
};

export default useForm;
