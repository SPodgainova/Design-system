// FloatingInput.tsx
import { memo } from "react";
import styles from "./styles.module.scss";
import type { TData } from "../Form/type";
import type { IFloatInputProps } from "./type";

const FloatInput = memo(
  ({
    value,
    name,
    type = "text",
    label = "",
    onChange,
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
        {(value !== null  && value !== undefined && value.trim() !== '') && (<button>X</button>)}
      </div>
    );
  }
);

export default FloatInput;
