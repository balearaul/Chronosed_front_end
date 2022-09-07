import styles from "./styles.module.css";

const Title = (props: any) => {
  const small = props.small ? styles.small : "";
  return <h2 className={styles.title + " " + small}>{props.title}</h2>;
};

export default Title;
