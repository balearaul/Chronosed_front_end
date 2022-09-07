import styles from "./styles.module.css";

export const GoalDateFrom = (props: any) => {
  return (
    <span className={styles.goalDate}>
      {props.from_date.date.toString().length == 1
        ? "0" + props.from_date.date
        : props.from_date.month}
      -
      {props.from_date.month.toString().length == 1
        ? "0" + props.from_date.month
        : props.from_date.month}
      -{props.from_date.year}
    </span>
  );
};

export const GoalDateTo = (props: any) => {
  return (
    <span className={styles.goalDate}>
      {props.to_date.date}-
      {props.to_date.month.toString().length == 1
        ? "0" + props.to_date.month
        : props.to_date.month.month}
      -{props.to_date.year}
    </span>
  );
};
