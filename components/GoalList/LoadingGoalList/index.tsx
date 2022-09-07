import styles from "./styles.module.css";
import Goal from "components/GoalComponents/Goal";

const LoadingGoalList = (props: any) => {
  return (
    <>
      <div className={`${styles.goal} ${styles.load_1}`}>Loading...</div>
      <div className={`${styles.goal} ${styles.load_2}`}>Loading...</div>
      <div className={`${styles.goal} ${styles.load_3}`}>Loading...</div>
    </>
  );
};

export default LoadingGoalList;
