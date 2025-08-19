import cl from "classnames";
import { useDropzone } from "react-dropzone";
import LoadIcon from "../icons/LoadIcon/LoadIcon";
import styles from "./styles.module.scss";
import type { IImageUploaderProps } from "./type";
import { memo, useState } from "react";
import DeleteIcon from "../icons/Delete/DeleteIcon";

const ImageUploader = memo(
  ({ previewUrl, onFileSelect, onClear }: IImageUploaderProps) => {
    const [isDragActive, setIsDragActive] = useState(false);

    const { getRootProps, getInputProps } = useDropzone({
      onDragEnter: () => {
        setIsDragActive(true);
      },
      onDrop: (acceptedFiles) => {
        setIsDragActive(false);
        const file = acceptedFiles[0];
        if (file) onFileSelect(file);
      },
      onDragLeave: () => setIsDragActive(false),
      noClick: true,
      noKeyboard: true,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".webp", ".svg"],
      },
      multiple: false,
    });

    console.log("previewUrl changed:", previewUrl);

    return (
      <>
        <div
          {...getRootProps()}
          key={previewUrl}
          className={cl(
            styles.container,
            previewUrl && styles.containerWithFile,
            isDragActive && styles.dragActive
          )}
          style={{
            background: `url(${previewUrl}) center/contain no-repeat`,
          }}
        >
          <div className={cl(styles.textBlock, previewUrl && styles.hidden)}>
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
            onChange={(e) => {
              e.target.files?.[0] && onFileSelect(e.target.files[0]);
            }}
            multiple={false}
          />
          {previewUrl && (
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={onClear}
            >
              <DeleteIcon />
            </button>
          )}
          {/* {error && <span className={styles.error}>{error}</span>} */}
        </div>
      </>
    );
  }
);

export default ImageUploader;
