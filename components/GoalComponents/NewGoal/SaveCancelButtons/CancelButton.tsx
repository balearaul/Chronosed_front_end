import styles from "./styles.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { PropaneSharp } from "@mui/icons-material";

const CancelButton = (props: any) => {
  return (
    <div
      className={`${styles["button"]} ${styles["cancel_button"]}`}
      onClick={props.onClick}
    >
      <ClearIcon />
    </div>
  );
};

export default CancelButton;
