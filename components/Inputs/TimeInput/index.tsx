// import { useMemo, useRef } from "react";

// // Redux
// import { RootState } from "store/store";
// import { useSelector, useDispatch } from "react-redux";

// import { HourSlider } from "./Slider/Hour/HourSlider";
// import { MinuteSlider } from "./Slider/Minute/MinuteSlider";
// import { TimeTextInput } from "./TimeTextInput";

const TimeInput = (props: any) => {
  return null;
  //   // Redux
  //   const hourVal = useSelector((state: RootState) => state.timeInput.hrValue);
  //   const minuteVal = useSelector((state: RootState) => state.timeInput.minValue);
  //   const dispatch = useDispatch();
  //   const handleHourInputChange = (e: any) => {
  //     dispatch(setHrValue(e.target.value));
  //   };
  //   const handleMinuteInputChange = (e: any) => {
  //     dispatch(setMinValue(e.target.value));
  //   };
  //   return (
  //     <>
  //       <HourSlider
  //         onChange={handleHourInputChange}
  //         value={hourVal}
  //         max={23.99}
  //         step={1}
  //       />
  //       <MinuteSlider
  //         onChange={handleMinuteInputChange}
  //         value={minuteVal}
  //         max={59.99}
  //         step={5}
  //       />
  //       <TimeTextInput
  //         onChangeHr={handleHourInputChange}
  //         onChangeMin={handleMinuteInputChange}
  //         HrValue={hourVal}
  //         MinValue={minuteVal}
  //       />
  //     </>
  //   );
};

export default TimeInput;
