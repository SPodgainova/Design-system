import { imageRules, linkRules, nameRules } from "../../validationRules";
import Button from "../Button/Button";
import FloatInput from "../FloatInput/FloatInput";
import ImageUploader from "../ImageUploader/ImageUploader";

import styles from "./styles.module.scss";
import type { IItemsForm } from "./type";

import { Controller, useForm, type SubmitHandler } from "react-hook-form"

// to Do
// для описания и заметок поменять инпут на textarea
// добавить кнопки для ведомостей, проекта
// драг дроп для аплоадера
// валидация :
// вес файла
// кол-во сиволов в текстареа

export const Form = () => {

  const { control, handleSubmit, resetField, watch, formState: { errors }, reset } = useForm<IItemsForm>({
    defaultValues: {
      link: "",
      image: "",
      name: "",
      description: "",
      notes: "",
    },
    mode: "onChange"
  })

  const submit: SubmitHandler<IItemsForm> = (data) => {
    console.log(data);
    reset()

  };

  const imageLink = watch("image");
  const isValidImgLink = !errors.image && imageLink; 

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <Controller name="link" control={control} rules={{
        validate: linkRules
      }} render={({ field, fieldState }) => <FloatInput {...field} label="Ссылка" error={fieldState.error?.message} onClear={() => {
        resetField('link')
      }} />} />

      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <ImageUploader
            previewUrl={isValidImgLink ? imageLink : null}
            onFileUpload={() => resetField("image")}
            onClear={() => resetField("image")}
          />
          <Controller name="image" control={control} rules={{
            validate:  imageRules
          }} render={({ field, fieldState }) => (
            <FloatInput {...field} label="Ссылка на изображение" error={fieldState.error?.message} onClear={() => resetField("image")} />
          )} />
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
          <Controller name="name" control={control} rules={nameRules} render={({ field, fieldState }) => <FloatInput {...field} label="Нименование *" error={fieldState.error?.message} onClear={() => resetField("name")} />} />
          {/* <FloatInput
            name="description"           
            value={formData.description}
            label="Введите описание"
            onChange={handleChange}
            onClear={() => clearField("description")}
          /> */}
        </div>
      </div>
      {/* <FloatInput
        name="notes"        
        value={formData.notes}
        label="Добавьте заметку"
        onChange={handleChange}
        onClear={() => clearField("notes")}
      /> */}
      <Button variant="submit">Добавить</Button>
    </form>
  );
};
