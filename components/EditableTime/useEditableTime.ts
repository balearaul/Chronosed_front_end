import { produce } from "immer";
import { useState } from "react";
import {
  getTodayObject,
  timeToDbFormat,
} from "components/GoalComponents/NewGoal/functions";
import useUpdateData from "hooks/useUpdateData";

const useEditableTime = (props: any) => {
  const { value, setDate, controlPanelState, changeControlPanelState } = props;
  const { time, implementedTime } = controlPanelState;
  const local_value = Object.assign({}, props.value);
  const today = getTodayObject();
  const today_value = {
    from: {
      time: false,
      date: today,
    },
    to: {
      time: false,
      date: today,
    },
  };

  const [local_value_state, set_local_value] = useState(
    implementedTime ? today_value : local_value
  );

  const [isEditing, setIsEditing] = useState(implementedTime);
  const { mutate: updateData } = useUpdateData(null);

  //  TIME INPUT EVENT HANDLERS
  const handleFromTimeChange = (from_val: any) => {
    const new_time = produce(local_value_state, (draft: any) => {
      draft.from.time = from_val;
    });
    set_local_value(new_time);
  };
  const handleToTimeChange = (to_val: any) => {
    const new_time = produce(local_value_state, (draft: any) => {
      draft.to.time = to_val;
    });
    set_local_value(new_time);
  };
  const handleFromDateChange = (from_val: any) => {
    const new_time = produce(local_value_state, (draft: any) => {
      draft.from.date = from_val;
    });
    set_local_value(new_time);
  };
  const handleToDateChange = (to_val: any) => {
    const new_time = produce(local_value_state, (draft: any) => {
      draft.to.date = to_val;
    });
    set_local_value(new_time);
  };

  const handleTimeDisplayClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    setDate(local_value_state);
    setIsEditing(false);
    // Transform data into the correct form for the database
    // Send the data to the database
    changeControlPanelState.implementedTime(false);
    const updatedTime = timeToDbFormat(local_value_state);
    updateData({ updatedData: updatedTime, id: props.id });
  };

  const handleCloseClick = () => {
    setIsEditing(false);

    //Only changeControlPanelState.time(false) if the time has just been implemented
    if (implementedTime) {
      changeControlPanelState.time(false);
    }
  };

  return {
    handleFromTimeChange,
    handleToTimeChange,
    handleFromDateChange,
    handleToDateChange,
    isEditing,
    setIsEditing,
    handleTimeDisplayClick,
    value,
    local_value: local_value_state,
    handleDoneClick,
    handleCloseClick,
  };
};

export default useEditableTime;
