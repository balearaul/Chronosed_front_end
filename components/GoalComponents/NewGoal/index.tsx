import styles from "./NewGoal.module.css";

import { useState } from "react";

import EditableTitle from "components/GoalComponents/Title/EditableTitle";
import SaveButton from "./SaveCancelButtons/SaveButton";
import CancelButton from "./SaveCancelButtons/CancelButton";
import ControlPanel from "./ControlPanel";

import useCreateNew from "hooks/useCreateNew";
import TimeInputSection from "./TimeInputSection";
import { constuctGoalObject, getTodayObject } from "./functions";

import { useSelector, useDispatch } from "react-redux";
import { startCreatingGoal, stopCreatingGoal } from "store/slices/creatingGoal";
import { RootState } from "store/store";
import { produce } from "immer";

// This component is completely decoupled from the rest of the app.
// It works in conjunction with the Create component which is responsible for isCreatingGoal state.

// STATE FOR THIS COMPONENT
// 1) Control Panel State
// 2) Title State
// 3) Time State from the TimeInputSection

const NewGoal = (props: any) => {
  const dispatch = useDispatch();
  const isCreatingGoal = useSelector(
    (state: RootState) => state.creatingGoal.isCreatingGoal
  );

  const today_obj = getTodayObject();

  const initialTimeState = {
    from: {
      date: today_obj,
      time: false,
    },
    to: {
      date: today_obj,
      time: false,
    },
  };

  const inititialControlPanelState = {
    time: false,
  };

  const [controlPanelState, setControlPanelTime] = useState(
    inititialControlPanelState
  );
  const [timeState, setTimeState] = useState(initialTimeState);
  const [title, setTitle] = useState("");

  const { mutate: CreateNew } = useCreateNew();

  // Only render the component if isCreatingGoal is true
  if (!isCreatingGoal) {
    return null;
  }

  const resetState = () => {
    setControlPanelTime(inititialControlPanelState);
    setTimeState(initialTimeState);
    setTitle("");
  };

  //  TIME INPUT EVENT HANDLERS
  const handleFromTimeChange = (from_val: any) => {
    const new_time = produce(timeState, (draft) => {
      draft.from.time = from_val;
    });
    setTimeState(new_time);
  };
  const handleToTimeChange = (to_val: any) => {
    const new_time = produce(timeState, (draft) => {
      draft.to.time = to_val;
    });
    setTimeState(new_time);
  };
  const handleFromDateChange = (from_val: any) => {
    const new_time = produce(timeState, (draft) => {
      draft.from.date = from_val;
    });
    setTimeState(new_time);
  };
  const handleToDateChange = (to_val: any) => {
    const new_time = produce(timeState, (draft) => {
      draft.to.date = to_val;
    });
    setTimeState(new_time);
  };

  // Redux
  // Only display the new Goal form if the user is creating a new goal

  const CreateNewGoal = () => {
    const newGoalData = constuctGoalObject(
      {
        title: title,
        ...timeState,
      },
      controlPanelState,
      props.parent,
      props.ancestors,
      props.identifier
    );
    CreateNew(newGoalData);
    resetState();
    dispatch(stopCreatingGoal());
  };

  const handleCanelButtonClick = () => {
    dispatch(stopCreatingGoal());
    resetState();
  };

  const handleTimeClick = () => {
    const newConrtolePanelState = produce(controlPanelState, (draft) => {
      draft.time = !draft.time;
    });
    setControlPanelTime(newConrtolePanelState);
    controlPanelState.time ? setTimeState(initialTimeState) : null;
  };

  const handleTitleChange = (titleVal: any) => {
    setTitle(titleVal);
  };

  return (
    <div className={styles.newGoalContainer}>
      <div className={styles.titleContainer}>
        <EditableTitle small focusTitle={true} onChange={handleTitleChange} />

        {controlPanelState.time && (
          <TimeInputSection
            value={timeState}
            handleFromTimeChange={handleFromTimeChange}
            handleToTimeChange={handleToTimeChange}
            handleFromDateChange={handleFromDateChange}
            handleToDateChange={handleToDateChange}
          />
        )}
      </div>
      <ControlPanel timeClick={handleTimeClick} />
      <div className={styles.buttons_container}>
        <SaveButton onClick={CreateNewGoal} />
        <CancelButton onClick={handleCanelButtonClick} />
      </div>
    </div>
  );
};

export default NewGoal;
