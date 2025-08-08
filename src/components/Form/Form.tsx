import { type FormEvent } from "react";

import Button from "../Button/Button";
import ImageUploader from "../Button/ImageUploader/ImageUploader";

import useForm from "../../hooks/useForm";

import styles from "./styles.module.scss";
import FloatInput from "../FloatInput/FloatInput";

export const Form = () => {
  const { formData, handleChange, resetForm } = useForm({
    link: "",
    image: "",
    name: "",
    description: "",
    notes: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FloatInput
        name="link"
        type="url"
        value={formData.link}
        label="Введите ссылку"
        onChange={handleChange}
      />
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <ImageUploader />
          <FloatInput
            name="image"
            type="text"
            value={formData.image}
            label="Ссылка на изображение"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <FloatInput
            name="name"
            type="text"
            value={formData.name}
            label="Введите название"
            onChange={handleChange}
          />
          <FloatInput
            name="description"
            type="text"
            value={formData.description}
            label="Введите описание"
            onChange={handleChange}
          />
        </div>
      </div>
      <FloatInput
        name="notes"
        type="text"
        value={formData.notes}
        label="Добавьте заметку"
        onChange={handleChange}
      />
      <Button>Добавить</Button>
    </form>
  );
};
