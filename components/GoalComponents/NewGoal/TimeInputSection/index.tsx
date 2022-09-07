import { TimeTextInput } from "components/Inputs/TimeInput/TimeTextInput";
import DateInput from "components/Inputs/DateInput";
import styles from "./TimeInputSection.module.css";
import { useState } from "react";
import { getTodayObject } from "../functions";
// PROPS FOR THIS COMPONENT
// 1) conntrol_panel_time - boolean - true if the control panel is open and the time input is visible
//
// 2) from_time and to_time from parent
// stucture of from_time and to_time
// from: {
//   date: false || value,
//   time: false || value,
// },
// to: {
//   date: false || value,
//   time: false || value,
// },

const TimeInputSection = (props: any) => {
  const from_date = props.value.from;
  const to_date = props.value.to;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <DateInput
            handleChange={props.handleFromDateChange}
            value={from_date.date}
          />
          <TimeTextInput
            handleChange={props.handleFromTimeChange}
            value={from_date.time}
          />
        </div>
        <div className={styles.to}>-</div>
        <div className={styles.sub_container}>
          <DateInput
            handleChange={props.handleToDateChange}
            value={to_date.date}
          />
          <TimeTextInput
            handleChange={props.handleToTimeChange}
            value={to_date.time}
          />
        </div>
      </div>
    </>
  );
};

export default TimeInputSection;
