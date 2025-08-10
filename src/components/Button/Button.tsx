import { memo } from "react";
import cl from "classnames";

import type { IButtonProps } from "./type";

import styles from "./styles.module.scss";

const Button = memo(({ children, onClick, variant }: IButtonProps) => {
  const buttonClass = cl(styles.button, {
    [styles.submit]: variant === "submit",
    [styles.clear]: variant === "clear",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {/* {variant === "copy" && } */}
      {children}
    </button>
  );
});

export default Button;
