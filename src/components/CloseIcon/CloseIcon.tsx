import styles from './styles.module.scss'

const CloseIcon = () => {
  return (
    <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      {/* <circle className={styles.round} cx="12" cy="12" fill="#D0CED9" r="12"></circle> */}
      <path className={styles.clear}
        d="m16 8-8 8M8 8l7.969 7.969"      
        strokeLinecap="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

export default CloseIcon;
