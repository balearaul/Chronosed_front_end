import { useRef } from "react";
import style from "./TimeTextInput.module.css";

const allowedCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
  "ArrowLeft",
  "ArrowRight",
];

export const TimeTextInput = (props: any) => {
  const HrInputRef: any = useRef(null);
  const MinInputRef: any = useRef(null);

  const handleKeyDownHr = (e: any) => {
    // if user wants to delete, don't go to onChange
    if (
      e.key == "Backspace" ||
      e.key == "Delete" ||
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight"
    ) {
      return;
    }
    //Do not allow non-numeric characters
    if (!allowedCharacters.includes(e.key)) {
      e.preventDefault();
      return;
    }
    // If the values already has a length of 2,
    // don't allow any more characters
    // Instead, go to the next input
    if (e.target.value.length == 2) {
      MinInputRef.current.focus();
      // if the next input already has a length of 2,
      // don't allow any more characters
      if (MinInputRef.current.value.length == 2) {
        e.preventDefault();
      }
      return;
    }
    // For values that are higher than 23, just go the the next input
    if (parseInt(e.target.value + e.key) > 23) {
      MinInputRef.current.focus();
      return;
    }
  };

  const handleKeyDownMin = (e: any) => {
    // if user wants to delete, don't go to onChange
    // but if the value is empty, go to the previous input
    if (e.key == "Backspace" || e.key == "Delete") {
      if (e.target.value == "") {
        HrInputRef.current.focus();
      } else {
        return;
      }
    }
    if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
      return;
    }
    if (!allowedCharacters.includes(e.key)) {
      //Do not allow non-numeric characters
      e.preventDefault();
      return;
    }
    if (e.target.value.length == 2) {
      e.preventDefault();
      return;
    }
    // For values that are higher than 59, just go the the next input
    if (parseInt(e.target.value + e.key) > 59) {
      e.preventDefault();
    }
  };

  const handleHoursChange = () => {
    props.handleChange({ ...props.value, hr: HrInputRef.current.value });
  };

  const handleMinutesChange = () => {
    props.handleChange({ ...props.value, min: MinInputRef.current.value });
  };

  const handleMinutesBlur = (event: any) => {
    if (event.target.value.length == 1) {
      event.target.value = "0" + event.target.value;
      handleMinutesChange();
    }
  };

  const handleHoursBlur = () => {
    if (HrInputRef.current.value.length == 1) {
      HrInputRef.current.value = "0" + HrInputRef.current.value;
      handleHoursChange();
    }
  };

  return (
    <>
      <div className={style.timeInputContainer}>
        <input //Hours
          placeholder="00"
          min="0"
          step="1"
          ref={HrInputRef}
          className={style.timeInput}
          type="number"
          onKeyDown={handleKeyDownHr}
          onChange={handleHoursChange}
          onBlur={handleHoursBlur}
          value={props.value.hr ? props.value.hr : ""}
        />
        <div className={style.colon}>:</div>
        <input //Minutes
          placeholder="00"
          min="0"
          step="1"
          ref={MinInputRef}
          className={style.timeInput}
          type="number"
          onKeyDown={handleKeyDownMin}
          onChange={handleMinutesChange}
          onBlur={handleMinutesBlur}
          value={props.value.min ? props.value.min : ""}
        />
      </div>
    </>
  );
};
