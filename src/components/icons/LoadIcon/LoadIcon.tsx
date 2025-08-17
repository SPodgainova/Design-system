import { memo } from "react";
import styles from "./styles.module.scss";

const LoadIcon = memo(() => {
  return (
    <svg fill="none" height="29" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles.icon}
        clipRule="evenodd"
        d="M7.07 20.686a1 1 0 0 0 1 1h7.857a1 1 0 0 0 1-1v-7.857a1 1 0 0 1 1-1h3.157c.891 0 1.337-1.077.707-1.707l-9.085-9.085a1 1 0 0 0-1.414 0l-9.085 9.085c-.63.63-.184 1.707.707 1.707h3.157a1 1 0 0 1 1 1v7.857ZM.5 25.97a1 1 0 0 1 1-1h20.998a1 1 0 0 1 1 1v1.285a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1v-1.285Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}
)
export default LoadIcon;
