import { memo } from "react";

import Button from "../Button/Button";

import styles from "./styles.module.scss";

import type { IFloatInputProps } from "./type";

const FloatInput = memo(
  ({ name, label, onClear, error, value, ...inputProps }: IFloatInputProps) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          {...inputProps}
          name={name}
          value={value}
          placeholder=" "
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        <label>{label}</label>
        {value && <Button variant="clear" onClick={onClear} />}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

export default FloatInput;
