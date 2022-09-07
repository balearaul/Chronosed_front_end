import styles from "./styles.module.css";

const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <img
          src="/Logo/Logo/Logo_center.svg"
          alt="Chronosed logo"
          className={styles.logo_svg}
        />
        <img
          src="/Logo/Chronosed/Chronosed_Text_Gray.svg"
          alt="Chronosed logo"
          className={styles.chronosed_svg}
        />
      </div>
    </>
  );
};

export default Logo;
