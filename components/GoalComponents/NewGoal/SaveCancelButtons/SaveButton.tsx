import styles from "./styles.module.css";
import DoneIcon from "@mui/icons-material/Done";

const SaveButton = (props: any) => {
  return (
    <div
      className={`${styles["button"]} ${styles["done_button"]}`}
      onClick={props.onClick}
    >
      <DoneIcon />
    </div>
  );
};

export default SaveButton;
