import type { ChangeEvent, FormEvent } from "react";
import useForm from "./useForm";
import useImageUpload from "./useImageUpload";

const useFormWithImg = <T extends Record<string, string | number | boolean>>(
  initialState: T
) => {
  const form = useForm(initialState);
  const image = useImageUpload();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.resetForm();
    image.clearImageState();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    form.handleChange(e);
    image.handleUrlChange(e.target.value);
  };

  const handleImageDelete = () => {
    image.clearImageState();
    form.clearField("image")
  }

  return { ...form, ...image, handleSubmit, handleImageChange, handleImageDelete };
};

export default useFormWithImg;
