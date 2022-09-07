import styles from "./styles.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const GoalExpansionArrow = (props: any) => {
  const handleClick = (event: any) => {
    event.stopPropagation();
    props.onClick();
  };

  const openArrow = (
    <div className={styles.arrow + " " + styles.open} onClick={handleClick}>
      <ExpandLessIcon />
    </div>
  );

  const closedArrow = (
    <div className={styles.arrow} onClick={handleClick}>
      <ExpandMoreIcon />
    </div>
  );

  return props.isOpen ? openArrow : closedArrow;
};

export default GoalExpansionArrow;
