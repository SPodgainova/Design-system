import { type FormEvent } from "react";

import useForm from "../../hooks/useForm";

import Button from "../Button/Button";
import FloatInput from "../FloatInput/FloatInput";
import ImageUploader from "../ImageUploader/ImageUploader";

import styles from "./styles.module.scss";

// to Do
// для описания и заметок поменять инпут на textarea
// name - обязательное
// добавить кнопки для ведомостей, проекта

export const Form = () => {
  const { formData, handleChange, clearField, resetForm } = useForm({
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
        onClear={() => clearField("link")}
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
            onClear={() => clearField("image")}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <FloatInput
            name="name"
            type="text"
            value={formData.name}
            label="Введите название"
            onChange={handleChange}
            onClear={() => clearField("name")}
          />
          <FloatInput
            name="description"
            type="text"
            value={formData.description}
            label="Введите описание"
            onChange={handleChange}
            onClear={() => clearField("description")}
          />
        </div>
      </div>
      <FloatInput
        name="notes"
        type="text"
        value={formData.notes}
        label="Добавьте заметку"
        onChange={handleChange}
        onClear={() => clearField("notes")}
      />
      <Button variant="submit">Добавить</Button>
    </form>
  );
};
