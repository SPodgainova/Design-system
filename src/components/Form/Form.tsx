import { type FormEvent } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./styles.module.scss";
import useForm from "../../hooks/useForm";
import ImageUploader from "../Button/ImageUploader/ImageUploader";
import FloatingInput from "../Float/FloatInput";

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
      <FloatingInput
        label="Ссылка на товар"
        value={formData.link}
        onChange={() => { }}
      />
      <Input
        name="link"
        type="text"
        value={formData.link}
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
