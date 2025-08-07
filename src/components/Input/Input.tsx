import type { TData } from "../Form/type";
import type { IInputProps } from "./type";

import styles from "./styles.module.scss";
import { memo } from "react";

const Input = memo(
  ({
    name,
    value,
    type = "text",
    placeholder = "",
    onChange,
  }: IInputProps<TData>) => {
    return (
      <input
        className={styles.input}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        data-filled={!!value}
      ></input>
    );
  }
);

export default Input;
