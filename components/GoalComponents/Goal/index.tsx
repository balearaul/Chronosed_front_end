import styles from "./styles.module.css";
import EditableTitle from "components/GoalComponents/Title/EditableTitle";
import Title from "components/GoalComponents/Title/Title";
import TimeDisplay from "../Time/TimeDisplay";
import GoalExpansionArrow from "./components/GoalExpansionArrow";
import GoalControlPanel from "components/GoalControlPanel";
import EditableTime from "components/EditableTime";
import useGoal from "./useGoal";
import useControlPanel from "../NewGoal/ControlPanel/useControlPanel";

const Goal = (props: any) => {
  // Copy (deep copy) of props into state
  // avoiding rerendering the entire list

  const goal_data = Object.assign({}, props.goal);
  const {
    _id,
    goalIsOpen,
    toggleGoalIsOpen,
    closeNewGoalForm,
    date,
    setDate,
    title,
    setTitle,
    handleGloalClick,
    removeTime,
    deleteElement,
  } = useGoal(goal_data);

  closeNewGoalForm();

  const {
    controlPanelState,
    handleTimeClick,
    changeControlPanelState,
    handleDeleteClick,
  } = useControlPanel(goal_data, removeTime, deleteElement);

  const goalContent = goalIsOpen ? (
    <div>
      <EditableTitle
        title={title}
        setTitle={setTitle}
        id={_id}
        updating
        small
        revalidate={null}
      />
      <div className={styles.goalTime}>
        {/* <TimeDisplay from_date={from_date} to_date={to_date} /> */}
        {controlPanelState.time && (
          <EditableTime
            value={date}
            id={_id}
            setDate={setDate}
            controlPanelState={controlPanelState}
            changeControlPanelState={changeControlPanelState}
          />
        )}
      </div>
      <GoalControlPanel
        goal={goal_data}
        timeClick={handleTimeClick}
        state={controlPanelState}
        onDelete={handleDeleteClick}
      />
    </div>
  ) : (
    <div>
      <Title title={title} small />
      <div className={styles.goalTime}>
        {controlPanelState.time ? (
          <TimeDisplay from_date={date.from} to_date={date.to} />
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      {props.children}
      <div className={styles.goal} onClick={handleGloalClick}>
        <div className={styles.goal_header}>
          <div className={styles.goal_content}>{goalContent}</div>
          <GoalExpansionArrow onClick={toggleGoalIsOpen} isOpen={goalIsOpen} />
        </div>
      </div>
    </>
  );
};

export default Goal;
