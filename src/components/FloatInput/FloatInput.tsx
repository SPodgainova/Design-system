import { memo } from "react";

import Button from "../Button/Button";

import styles from "./styles.module.scss";

import type { IFloatInputProps } from "./type";

import cl from "classnames";

const FloatInput = memo(
  ({
    variant,
    name,
    label,
    onClear,
    error,
    value,
    ...inputProps
  }: IFloatInputProps) => {
    return (
      <div className={styles.inputWrapper}>
        {variant === "input" && (
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
        )}
        {variant === "textarea" && (
          <textarea
            rows={3}
            {...inputProps}
            name={name}
            value={value}
            placeholder=" "   
          />
        )}
        <label htmlFor={name} className={styles.areaLable}>
          {label}
        </label>
        {value && (
          <Button
            variant="clear"
            className={cl(
              styles.clearButton,
              variant === "textarea" && styles.clearAreaButton
            )}
            onClick={onClear}
          />
        )}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

export default FloatInput;
