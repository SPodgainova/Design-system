import cl from "classnames";
import LoadIcon from "../LoadIcon/LoadIcon";
import styles from "./styles.module.scss";
import type { IImageUploaderProps } from "./type";
import { useEffect, useState, type ChangeEvent } from "react";

const ImageUploader = ({
  previewUrl,
  onFileUpload,
  onClear,
}: IImageUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (file) {
        const url = URL.createObjectURL(file);
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile?.type.startsWith("image/")) {
      setFile(selectedFile);
      onFileUpload();
      setError("");
    } else {
      setError("Можно загружать только изображения!");
      setFile(null);
    }
  };

  const currentPreview = file ? URL.createObjectURL(file) : previewUrl;

  return (
    <>
      <div
        className={cl(
          styles.container,
          currentPreview && styles.containerWithFile
        )}
        style={{
          background: `url(${currentPreview}) center/contain no-repeat`,
        }}
      >
        <div className={cl(styles.textBlock, currentPreview && styles.hidden)}>
          <LoadIcon />
          <h3>
            Добавьте изображение по&nbsp;клику, перетяните файл или добавьте
            ссылку на&nbsp;изображение ниже
          </h3>
          <p className={styles.description}>
            Изображение должно быть в&nbsp;формате .jpg, .webp, .svg, или .png
          </p>
        </div>
        <input
          className={styles.input}
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
          multiple={false}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
      {currentPreview && (
        <div className={styles.btnContainer}>
          <button>Изменить изображение</button>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              onClear();
            }}
          >
            Удалить
          </button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
