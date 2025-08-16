import Button from "../Button/Button";
import FloatInput from "../FloatInput/FloatInput";

import styles from "./styles.module.scss";
import type { IItemsForm } from "./type";

import { Controller, useForm, type SubmitHandler } from "react-hook-form"

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
// вывод ошибки

export const Form = () => {

  const { control, handleSubmit, resetField } = useForm<IItemsForm>({
    defaultValues: {
      link: "",
      image: "",
      name: "",
      description: "",
      notes: "",
    }
  })

  const submit: SubmitHandler<IItemsForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Controller name="link" control={control} rules={{
        validate: (value) => {
          if (!value) return true;
          try {
            new URL(value);
            return true
          }
          catch {
            return "Введите корректный URL"
          }
        }
      }} render={({ field, fieldState }) => <FloatInput {...field} type="text" label="Ссылка" error={fieldState.error?.message} onClear={() => {
        resetField('link')
      }} />} />

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          {/* <ImageUploader
            previewUrl={getPreviewUrl()}
            onChange={handleChangeFile}
            onClick={handleImageDelete}
          /> */}
          {/* <FloatInput
            name="image"
            type="url"
            value={formData.image}
            label="Ссылка на изображение"
            onChange={handleImageChange}
            onClear={() => clearField("image")}
          /> */}
        </div>
        <div className={styles.inputsWrapper}>
          <Controller name="name" control={control} rules={{ required: { value: true, message: "Введите минимум 1 символ" }, minLength: 1 }} render={({ field, fieldState }) => <FloatInput {...field} type="text" label="Нименование *" error={fieldState.error?.message} onClear={() => resetField("name")} />} />
          {/* <FloatInput
            name="description"
            type="text"
            value={formData.description}
            label="Введите описание"
            onChange={handleChange}
            onClear={() => clearField("description")}
          /> */}
        </div>
      </div>
      {/* <FloatInput
        name="notes"
        type="text"
        value={formData.notes}
        label="Добавьте заметку"
        onChange={handleChange}
        onClear={() => clearField("notes")}
      /> */}
      <Button variant="submit">Добавить</Button>
    </form>
  );
};
