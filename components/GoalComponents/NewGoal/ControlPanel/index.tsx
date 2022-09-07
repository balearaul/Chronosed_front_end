import styles from "./styles.module.css";

// ICONS
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ControlPanel = (props: any) => {
  return (
    <div className={styles.control_panel_container}>
      <div className={styles.time_container} onClick={props.timeClick}>
        <AccessTimeIcon />
      </div>
    </div>
  );
};

export default ControlPanel;
