import cl from "classnames";

import LoadIcon from "../LoadIcon/LoadIcon";

import styles from "./styles.module.scss";
import type { IImageUploaderProps } from "./type";

const ImageUploader = ({
  previewUrl,
  onChange,
  onClick,
}: IImageUploaderProps) => {
  return (
    <>
      <div
        className={cl(styles.container, previewUrl && styles.containerWithFile)}
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
          className={styles.input}
          type="file"
          accept="image/*"
          onChange={onChange}
          multiple={false}
        />
      </div>
      {previewUrl && (
        <div className={styles.btnContainer}>
          <button>Изменить изображение</button>
          <button onClick={onClick}>Удалить</button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
