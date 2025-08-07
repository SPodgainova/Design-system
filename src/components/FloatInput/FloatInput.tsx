// FloatingInput.tsx
import { memo, useState } from "react";
import styles from "./styles.module.scss";

type TFloatingInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void; // Изменили тип!
} & React.InputHTMLAttributes<HTMLInputElement>;

const FloatingInput = memo(
  ({ label, value, onChange }: TFloatingInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      // <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input value={value} onChange={onChange} />
        <label
          className={`${styles.label} ${
            value || isFocused ? styles.labelFloating : ""
          }`}
        >
          {label}
        </label>
      </div>
      // </div>
    );
  }
);

export default FloatingInput;
