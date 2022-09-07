import styles from "./styles.module.css";
import {
  GoalTimeFrom,
  GoalTimeTo,
} from "components/GoalComponents/Time/GoalTime";
import {
  GoalDateFrom,
  GoalDateTo,
} from "components/GoalComponents/Time/GoalDate";

const TimeDisplay = (props: any) => {
  // If props missing, throw error
  if (!props.from_date || !props.to_date) {
    console.error("TimeDisplay: from_date or to_date is missing");
    return null;
  }
  // Extract props
  const from_date = props.from_date;
  const to_date = props.to_date;

  // Check if date are the same
  const dates_are_equal =
    from_date.date.date === to_date.date.date &&
    from_date.date.month === to_date.date.month &&
    from_date.date.year === to_date.date.year;

  return (
    <>
      <div className={styles.timeDisplay}>
        {props.from_date.date && <GoalDateFrom from_date={from_date.date} />}
        {props.from_date.time && <GoalTimeFrom from_date={from_date.time} />}

        {/* If the goal has a to_time or the from and to dates are different, return a dash*/}
        {props.to_date.time || (props.from_date.time && !dates_are_equal) ? (
          <span> - </span>
        ) : null}
        {/* If the dates are not equal, also display the to_date */}
        {props.to_date.date && !dates_are_equal && (
          <GoalDateTo to_date={to_date.date} />
        )}
        {/* If there is a finish time displat it */}
        {props.to_date.time && (
          <>
            <GoalTimeTo to_date={to_date.time} />
          </>
        )}
      </div>
    </>
  );
};

export default TimeDisplay;
