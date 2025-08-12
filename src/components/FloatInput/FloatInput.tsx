// FloatingInput.tsx
import { memo } from "react";

import Button from "../Button/Button";

import styles from "./styles.module.scss";

import type { IFloatInputProps } from "./type";
import type { TData } from "../Form/type";

const FloatInput = memo(
  ({
    value,
    name,
    type = "text",
    label = "",
    onChange,
    onClear,
  }: IFloatInputProps<TData>) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          placeholder=" "
        />
        <label>{label}</label>
        {value !== null && value !== undefined && value.trim() !== "" && (
          <Button variant="clear" onClick={onClear} />
        )}
      </div>
    );
  }
);

export default FloatInput;
