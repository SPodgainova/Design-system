
import useImageUpload from "../../hooks/useImageUpload";

import LoadIcon from "../LoadIcon/LoadIcon";

import styles from "./styles.module.scss";

const ImageUploader = () => {
  const { handleChangeFile } = useImageUpload();
  return (
    <div className={styles.container}>
      <LoadIcon />
      <div className={styles.textBlock}>
        <h3>Добавьте изображение по клику или перетяните файл</h3>
        <p className={styles.description}>
          Изображение должно быть в&nbsp;формате .jpg, .webp,
          .svg, или .png
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
  );
};

export default ImageUploader;
