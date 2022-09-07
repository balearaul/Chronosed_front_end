import styles from "./styles.module.css";

export const GoalTimeFrom = (props: any) => {
  return (
    <span className={styles.goalTime}>
      {props.from_date
        ? !!props.from_date.hr
          ? props.from_date.hr
          : null
        : null}
      {props.from_date
        ? !!props.from_date.min
          ? ":" + props.from_date.min
          : ":00"
        : null}
    </span>
  );
};

export const GoalTimeTo = (props: any) => {
  return (
    <span className={styles.goalTime}>
      {props.to_date ? (!!props.to_date.hr ? props.to_date.hr : null) : null}
      {props.to_date
        ? !!props.to_date.min
          ? ":" + props.to_date.min
          : ":00"
        : null}
    </span>
  );
};
