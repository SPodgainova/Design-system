import { memo } from "react";
import type { IButtonProps } from "./type";

import styles from "./styles.module.scss";

const Button = memo(({ children, onClick }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
