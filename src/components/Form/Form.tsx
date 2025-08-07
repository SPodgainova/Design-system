import { type FormEvent } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import ImageUploader from "../Button/ImageUploader/ImageUploader";

import useForm from "../../hooks/useForm";

import styles from "./styles.module.scss";

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
      <Input
        name="link"
        type="text"
        value={formData.link}
        placeholder="Ссылка на товар"
        onChange={handleChange}
      />
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <ImageUploader />
          <Input
            name="image"
            type="text"
            value={formData.image}
            placeholder="Ссылка на изображение"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <Input
            name="name"
            type="text"
            value={formData.name}
            placeholder="Название товара"
            onChange={handleChange}
          />
          <Input
            name="description"
            type="text"
            value={formData.description}
            placeholder="Описание товара"
            onChange={handleChange}
          />
        </div>
      </div>
      <Input
        name="notes"
        type="text"
        value={formData.notes}
        placeholder="Добавьте заметку"
        onChange={handleChange}
      />
      <Button>Добавить</Button>
    </form>
  );
};
