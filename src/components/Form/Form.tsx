import Button from "../Button/Button";
import FloatInput from "../FloatInput/FloatInput";
import ImageUploader from "../ImageUploader/ImageUploader";

import styles from "./styles.module.scss";
import type { IItemsForm } from "./type";

import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  descriptionRules,
  imageRules,
  linkRules,
  nameRules,
  notesRules,
  validateFile,
} from "./validationItemsRules";
import { useCallback, useRef } from "react";

// to do
// добавить кнопки для ведомостей, проекта

export const Form = () => {
  const {
    control,
    setValue,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
    reset,
    setError,
  } = useForm<IItemsForm>({
    defaultValues: {
      link: "",
      image: "",
      name: "",
      description: "",
      notes: "",
    },
    mode: "onChange",
  });

  
  const submit: SubmitHandler<IItemsForm> = (data) => {
    console.log(data);
    reset();
  };

  const imageLink = watch("image");
const imgUrlRef = useRef<string | null>(null);

  const handleChangeFile = useCallback((file: File) => {
    const validationResult = validateFile(file);
    const oldUrl = imgUrlRef.current;

    if (validationResult === true) {
      if (oldUrl) URL.revokeObjectURL(oldUrl);
      const newUrl = URL.createObjectURL(file);
      imgUrlRef.current = newUrl;
      setValue("image", newUrl);
    } else {
      setError("image", { message: validationResult });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <ImageUploader
            previewUrl={imageLink}
            onFileSelect={handleChangeFile}
            onClear={() => setValue("image", "")}
          />
          <Controller
            name="image"
            control={control}
            rules={{
              validate: imageRules,
            }}
            render={({ field, fieldState }) => (
              <FloatInput
                {...field}
                variant="input"
                label="Ссылка на изображение"
                error={fieldState.error?.message}
                onClear={() => resetField("image")}
              />
            )}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <Controller
            name="name"
            control={control}
            rules={nameRules}
            render={({ field, fieldState }) => (
              <FloatInput
                {...field}
                variant="input"
                label="Наименование *"
                error={fieldState.error?.message}
                onClear={() => resetField("name")}
              />
            )}
          />
          <Controller
            name="link"
            control={control}
            rules={{
              validate: linkRules,
            }}
            render={({ field, fieldState }) => (
              <FloatInput
                {...field}
                variant="input"
                label="Ссылка на товар"
                error={fieldState.error?.message}
                onClear={() => {
                  resetField("link");
                }}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={descriptionRules}
            render={({ field, fieldState }) => (
              <FloatInput
                {...field}
                variant="textarea"
                label="Введите описание"
                error={fieldState.error?.message}
                onClear={() => resetField("description")}
              />
            )}
          />
        </div>
      </div>
      <Controller
        name="notes"
        control={control}
        rules={notesRules}
        render={({ field, fieldState }) => (
          <FloatInput
            {...field}
            variant="textarea"
            label="Добавьте заметку"
            error={fieldState.error?.message}
            onClear={() => resetField("notes")}
          />
        )}
      />
      <div className={styles.btnWrapper}>
        <Button variant="submit" type="submit">
          Добавить
        </Button>
        <Button variant="submit" onClick={() => reset()}>
          Очистить форму
        </Button>
      </div>
    </form>
  );
};
