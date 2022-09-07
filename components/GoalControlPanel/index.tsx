import styles from "./styles.module.css";

// ICONS
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const GoalControlPanel = (props: any) => {
  const timeStyles = props.state.time
    ? styles.button_container + " " + styles.active
    : styles.button_container;

  return (
    <div className={styles.control_panel_container}>
      <div className={styles.controls}>
        <div className={timeStyles} onClick={props.timeClick}>
          <AccessTimeIcon />
        </div>
      </div>
      <div
        onClick={props.onDelete}
        className={styles.button_container + " " + styles.delete}
      >
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};

export default GoalControlPanel;
