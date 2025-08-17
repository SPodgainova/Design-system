import cl from "classnames";
import { useDropzone } from "react-dropzone";
import LoadIcon from "../LoadIcon/LoadIcon";
import styles from "./styles.module.scss";
import type { IImageUploaderProps } from "./type";
import { memo, useEffect, useState, type ChangeEvent } from "react";
import DeleteIcn from "../icons/Delete/DeleteIcn";

const ImageUploader = memo(
  ({ previewUrl, onFileUpload, onClear }: IImageUploaderProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [isDragActive, setIsDragActive] = useState(false);

    useEffect(() => {
      return () => {
        if (file) {
          const url = URL.createObjectURL(file);
          URL.revokeObjectURL(url);
        }
      };
    }, [file]);

    const MAX_FILE_SIZE_MB = 5;

    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
        setIsDragActive(false);
        const file = acceptedFiles[0];
        if (file) handleFile(file);
      },
      onDragEnter: () => {
        setIsDragActive(true);
        console.log(isDragActive);
      },
      onDragLeave: () => setIsDragActive(false),
      noClick: true,
      noKeyboard: true,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".webp", ".svg"],
      },
      multiple: false,
    });

    const handleFile = (file: File | null) => {
      if (!file) {        
        setFile(null);
        return;
      }

      if (!file.type.startsWith("image/")) {
        setFile(null);
        onFileUpload();
        setError("Можно загружать только изображения");
        return;
      }

      const maxSize = MAX_FILE_SIZE_MB * 1024 * 1024; // Конвертируем MB в байты
      if (file.size > maxSize) {
        setError(`Максимальный размер файла — ${MAX_FILE_SIZE_MB} MB`);
        setFile(null);
        return;
      }
      setFile(file);
      onFileUpload();
      setError("");
    };

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      handleFile(selectedFile || null);
    };

    const currentPreview = file ? URL.createObjectURL(file) : previewUrl;

    return (
      <>
        <div
          {...getRootProps()}
          className={cl(
            styles.container,
            currentPreview && styles.containerWithFile,
            isDragActive && styles.dragActive
          )}
          style={{
            background: `url(${currentPreview}) center/contain no-repeat`,
          }}
        >
          <div
            className={cl(styles.textBlock, currentPreview && styles.hidden)}
          >
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
            {...getInputProps()}
            className={styles.input}
            type="file"
            accept="image/*"
            onChange={handleChangeFile}
            multiple={false}
          />
          {currentPreview && (
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => {
                setFile(null);
                onClear();
              }}
            >
              <DeleteIcn />
            </button>
          )}
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </>
    );
  }
);

export default ImageUploader;
