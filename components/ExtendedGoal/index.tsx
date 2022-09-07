import styles from "./styles.module.css";
// components
import Goal from "components/GoalComponents/Goal";
import TimeDisplay from "components/GoalComponents/Time/TimeDisplay";
import Create from "components/GoalComponents/CreateButton";
import LoadingGoalList from "components/GoalList/LoadingGoalList";
import NewGoal from "components/GoalComponents/NewGoal";
import EditableTitle from "components/GoalComponents/Title/EditableTitle";
import Breadcrumb from "components/GoalComponents/Breadcrumb";
// hook
import useExtendedGoal from "./useExtendedGoal";

const ExtendedGoal = (props: any) => {
  const { goal_id } = props;
  const {
    closeNewGoalForm,
    childrenData,
    is_loading_children,
    parnet_data_obj,
    from_date,
    to_date,
    ancestors,
    toRevalidate,
  } = useExtendedGoal(goal_id);

  closeNewGoalForm();

  if (!parnet_data_obj) {
    return (
      <div className={styles.goal_id_container}>{/* <div>loading</div> */}</div>
    );
  }

  if (is_loading_children) {
    // If parent data is available, but not children, (usual case)
    // Show parent data, show loading children
    return (
      <>
        <div className={styles.goal_id_container}>
          <Breadcrumb elements={ancestors} />
          {
            <EditableTitle
              title={parnet_data_obj.title}
              id={goal_id}
              updating
              setTitle={(title: any) => {}}
              revalidate={"goals"}
            />
          }
          <TimeDisplay from_date={from_date} to_date={to_date} />
          <LoadingGoalList />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.goalId}>
        <div className={styles.goal_id_container}>
          <Breadcrumb elements={ancestors} />
          <div className={styles.goal_hedear}>
            <EditableTitle
              title={parnet_data_obj?.title}
              id={goal_id}
              updating
              setTitle={(title: any) => {}}
              revalidate={"goals"}
            />
            <TimeDisplay from_date={from_date} to_date={to_date} />
          </div>
          {childrenData?.data.map((goal: any) => {
            return <Goal goal={goal} key={goal._id} />;
          })}
          <NewGoal
            ancestors={ancestors}
            parent={goal_id}
            identifier={toRevalidate}
          />
        </div>
        <Create />
      </div>
    </>
  );
};

export default ExtendedGoal;
