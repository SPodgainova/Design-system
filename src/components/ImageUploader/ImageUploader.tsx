import cl from "classnames";
import useImageUpload from "../../hooks/useImageUpload";

import LoadIcon from "../LoadIcon/LoadIcon";

import styles from "./styles.module.scss";

const ImageUploader = () => {
  const { file, handleChangeFile, getPreviewUrl } = useImageUpload();
  return (
    <>
    <div
      className={cl(styles.container, file && styles.containerWithFile)}
      style={{
        background: `url(${getPreviewUrl()}) center/contain no-repeat`,
      }}
    >
      <div className={cl(styles.textBlock, file && styles.hidden)}>
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
          {file && 
        <div className={styles.btnContainer}>
          <button>Изменить изображение</button>
          <button>Удалить</button>
        </div>
      }
    </>
  );
};

export default ImageUploader;
