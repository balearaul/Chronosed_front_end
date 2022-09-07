import styles from "./styles.module.css";
import GoalList from "components/GoalComponents/GoalList";
import LoadingGoalList from "components/GoalList/LoadingGoalList";
import { useDataTime } from "hooks/useDataTime";
import NewGoal from "components/GoalComponents/NewGoal";
import Create from "components/GoalComponents/CreateButton";
import Goal from "components/GoalComponents/Goal";
import Breadcrumb from "components/GoalComponents/Breadcrumb";

const pageContent = (goalData: any) => {
  return (
    <div className={styles.goals}>
      {goalData.map((goal: any) => {
        const breadcrumbs = goal.ancestors.concat({
          title: goal.title,
          id: goal._id,
        });
        return (
          <Goal goal={goal} key={goal._id}>
            <div className={styles.breadcrumb}>
              <Breadcrumb little elements={breadcrumbs} />
            </div>
          </Goal>
        );
      })}

      <NewGoal
        parent={"root"}
        ancestors={new Array()}
        identifier={"goals"}
        key={"newGoal"}
      />
      <Create />
    </div>
  );
};

const Time = () => {
  const { isLoading, isFetching, isSuccess, data, isError, error } =
    useDataTime(
      "goalsTime",
      {
        "from.val": { $ne: null },
      },
      { "from.val": 1 }
    );

  if (isLoading) {
    return (
      <div className={styles.goals}>
        <LoadingGoalList />
      </div>
    );
  }
  if (isFetching) {
    const goalData = data?.data;
    return pageContent(goalData);
  }
  if (isSuccess) {
    const goalData = data?.data;
    return pageContent(goalData);
  }
};

export default Time;
