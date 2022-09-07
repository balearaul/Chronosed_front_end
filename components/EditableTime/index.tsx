import styles from "./styles.module.css";
import TimeDisplay from "components/GoalComponents/Time/TimeDisplay";
import TimeInputSection from "components/GoalComponents/NewGoal/TimeInputSection";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import useEditableTime from "./useEditableTime";

const EditableTime = (props: any) => {
  const {
    handleFromTimeChange,
    handleToTimeChange,
    handleFromDateChange,
    handleToDateChange,
    isEditing,
    handleTimeDisplayClick,
    value, // Value is {to:{},from:{}}
    local_value,
    handleDoneClick,
    handleCloseClick,
  } = useEditableTime(props);

  if (isEditing) {
    return (
      <>
        <div className={styles.timeInputSectionContainer}>
          <TimeInputSection
            value={local_value}
            handleFromTimeChange={handleFromTimeChange}
            handleToTimeChange={handleToTimeChange}
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
          />
          <div className={styles.controls}>
            <div
              className={styles.done + " " + styles.button}
              onClick={handleDoneClick}
            >
              <DoneIcon />
            </div>
            <div
              className={styles.close + " " + styles.button}
              onClick={handleCloseClick}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div onClick={handleTimeDisplayClick}>
          <TimeDisplay from_date={value.from} to_date={value.to} />
        </div>
      </>
    );
  }
};

export default EditableTime;
