import cl from "classnames";
import { memo } from "react";

import CloseIcon from "../CloseIcon/CloseIcon";

import styles from "./styles.module.scss";

import type { IButtonProps } from "./type";

const Button = memo(({ children, onClick, variant }: IButtonProps) => {
  const buttonClass = cl(styles.button, {
    [styles.submit]: variant === "submit",
    [styles.clear]: variant === "clear",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {variant === "clear" && <CloseIcon />}
      {children}
    </button>
  );
});

export default Button;
