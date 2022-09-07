import styles from "./styles.module.css";
import Goal from "../Goal";

const GoalList = (props: any) => {
  return props.goals.map((goal: any) => {
    return <Goal goal={goal} key={goal._id} />;
  });
};

export default GoalList;
