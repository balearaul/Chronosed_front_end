import styles from "./styles.module.css";
import { useRef, useEffect } from "react";
import { ContactSupportOutlined } from "@mui/icons-material";
import { ObjectToString } from "components/GoalComponents/Time/TimeDisplay/functions";
import { getTodayObject } from "components/GoalComponents/NewGoal/functions";

export const DateInput = (props: any) => {
  // Actual date input
  const DateInputRef: any = useRef(null);
  // Our separate custom date display
  const dayInputRef: any = useRef(null);
  const monthInputRef: any = useRef(null);
  const yearInputRef: any = useRef(null);

  useEffect(() => {
    const dateInputRef_val = DateInputRef.current.value;
    const dateInputRef_val_array = dateInputRef_val.split("-");

    const selectedYear = dateInputRef_val_array[0];
    const selectedMonth = dateInputRef_val_array[1];
    const selectedDay = dateInputRef_val_array[2];

    dayInputRef.current.value = selectedDay;
    monthInputRef.current.value = selectedMonth;
    yearInputRef.current.value = selectedYear;
  }, []);

  const handleDateChange = () => {
    // Getting the new values and
    // executing the onChange prop
    // setting the value of our custom date display to the new values
    const dateInputRef_val = DateInputRef.current.value;
    const dateInputRef_val_array = dateInputRef_val.split("-");

    const selectedYear = dateInputRef_val_array[0];
    const selectedMonth = dateInputRef_val_array[1];
    const selectedDay = dateInputRef_val_array[2];

    props.handleChange({
      year: parseInt(selectedYear),
      month: parseInt(selectedMonth),
      date: parseInt(selectedDay),
    });

    // Our separate custom date display
    dayInputRef.current.value = selectedDay;
    monthInputRef.current.value = selectedMonth;
    yearInputRef.current.value = selectedYear;
  };

  const handleDateClick = () => {
    DateInputRef.current.showPicker();
  };

  // date from props
  const dateValueString = ObjectToString(props.value);

  return (
    <>
      <div className={styles.dateInputContainer} onClick={handleDateClick}>
        <input
          type="number"
          ref={dayInputRef}
          className={styles.input}
          placeholder={"00"}
          disabled={true}
        />
        <div className={styles.dash}>-</div>
        <input
          type="number"
          ref={monthInputRef}
          className={styles.input}
          placeholder={"00"}
          disabled={true}
        />
        <div className={styles.dash}>-</div>
        <input
          type="number"
          ref={yearInputRef}
          className={styles.input + " " + styles.yearInput}
          placeholder={"0000"}
          disabled={true}
        />

        <input //Date
          value={dateValueString}
          ref={DateInputRef}
          className={styles.dateInput}
          type="date"
          onChange={handleDateChange}
        />
      </div>
    </>
  );
};

export default DateInput;
