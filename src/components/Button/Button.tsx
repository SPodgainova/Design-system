import cl from "classnames";
import { memo } from "react";

import ClearIcon from "../icons/Clear/ClearIcon";

import styles from "./styles.module.scss";

import type { IButtonProps } from "./type";

const Button = memo(
  ({ children, onClick, variant, className }: IButtonProps) => {
    const buttonClass = cl(
      styles.button,
      {
        [styles.submit]: variant === "submit",
        [styles.clear]: variant === "clear",
      },
      className
    );

    return (
      <button className={buttonClass} onClick={onClick}>
        {variant === "clear" && <ClearIcon />}
        {children}
      </button>
    );
  }
);

export default Button;
