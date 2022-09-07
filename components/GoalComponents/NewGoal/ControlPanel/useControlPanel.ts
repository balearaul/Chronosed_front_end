import { useState } from "react";
import { generateControlPanel } from "components/GoalControlPanel/functions";
import { produce } from "immer";

const useControlPanel = (
  goal_data: any,
  removeTime: any,
  deleteElement: any
) => {
  const initialcontrolPanelState = generateControlPanel(goal_data);
  const [controlPanelState, setControlPanelState] = useState(
    initialcontrolPanelState
  );

  // Centralizing all changes done to the ControolPanelState
  const changeControlPanelState = {
    time: (value: any = "toggle") => {
      const new_control_panel_time_val =
        value == "toggle" ? !controlPanelState.time : value;
      const newControlPanelState = produce(controlPanelState, (draft: any) => {
        draft.time = new_control_panel_time_val;
        draft.implementedTime =
          new_control_panel_time_val && !controlPanelState.time ? true : false;
      });
      setControlPanelState(newControlPanelState);
    },
    implementedTime: (value: any) => {
      const newControlPanelState = produce(controlPanelState, (draft: any) => {
        draft.implementedTime = value;
      });
      setControlPanelState(newControlPanelState);
    },
  };

  // Handle click on time icon of control Panel
  const handleTimeClick = () => {
    if (controlPanelState.time) {
      removeTime();
      changeControlPanelState.time(false);
    } else {
      changeControlPanelState.time(true);
    }
  };

  const handleDeleteClick = () => {
    deleteElement();
  };

  return {
    controlPanelState,
    handleTimeClick,
    changeControlPanelState,
    handleDeleteClick,
  };
};

export default useControlPanel;
