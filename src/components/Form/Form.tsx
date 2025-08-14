import { type ChangeEvent, type FormEvent } from "react";

import useForm from "../../hooks/useForm";

import Button from "../Button/Button";
import FloatInput from "../FloatInput/FloatInput";
import ImageUploader from "../ImageUploader/ImageUploader";

import styles from "./styles.module.scss";
import type { TData } from "./type";
import useImageUpload from "../../hooks/useImageUpload";

// to Do
// для описания и заметок поменять инпут на textarea
// добавить кнопки для ведомостей, проекта
// драг дроп для аплоадера
// валидация :
    // name 1 символ*
    // вес файла
    // ссылки (регулярки + конец ссылки для картинки)
    // кол-во сиволов в текстареа
    // кол-во сиволов в инпутах

export const Form = () => {
  const { formData, handleChange, clearField, resetForm } = useForm<TData>({
    link: "",
    image: "",
    name: "",
    description: "",
    notes: "",
  });

  const {
    file,
    fileUrl,
    handleChangeFile,
    clearImageState,
    getPreviewUrl,
    handleUrlChange,
    error,
  } = useImageUpload();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    handleUrlChange(e.target.value);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
    resetForm();
    clearImageState();
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
            onChange={handleImageChange}
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
