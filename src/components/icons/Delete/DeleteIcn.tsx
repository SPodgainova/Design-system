import styles from './styles.module.scss'

const DeleteIcn = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100" 
      width="20"
      height="20"
      fill="none"
    >
      <path className={styles.frame}       
        d="M12 .5h76C94.351.5 99.5 5.649 99.5 12v76c0 6.351-5.149 11.5-11.5 11.5H12C5.649 99.5.5 94.351.5 88V12C.5 5.649 5.649.5 12 .5Z"
      />
      <path
        stroke="#141B34"
        stroke-linecap="round"
        stroke-width="3"
        d="m65 37-.804 13.013M35 37l1.21 20.05c.309 5.134.464 7.702 1.747 9.548a8.002 8.002 0 0 0 2.401 2.262c1.343.82 3.004 1.066 5.642 1.14"
      />
      <path
        stroke="#141B34"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M66 56 52 70m14 0L52 56"
      />
      <path
        stroke="#141B34"
        stroke-linecap="round"
        stroke-width="3"
        d="M32 37h36m-9.889 0-1.365-2.816c-.907-1.871-1.36-2.807-2.143-3.39a3.999 3.999 0 0 0-.549-.345C53.188 30 52.148 30 50.069 30c-2.131 0-3.197 0-4.078.468a4.006 4.006 0 0 0-.556.358c-.792.607-1.234 1.577-2.118 3.517L42.106 37"
      />
    </svg>
  );
};

export default DeleteIcn;
