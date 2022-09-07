import styles from "./goals.module.css";
import { useData } from "hooks/useData";
import Create from "components/GoalComponents/CreateButton";
import NewGoal from "components/GoalComponents/NewGoal";
import LoadingGoalList from "components/GoalList/LoadingGoalList";
import GoalList from "components/GoalComponents/GoalList";
import { useEffect, useMemo, useState } from "react";

const pageContent = (data: any) => {
  return (
    <div className={styles.goals}>
      <GoalList goals={data?.data} />
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

const Goals = () => {
  const { isLoading, isFetching, isSuccess, data, isError, error } = useData(
    "goals",
    {
      parent: "root",
    },
    {}
  );

  if (isLoading) {
    return (
      <div className={styles.goals}>
        <LoadingGoalList />
      </div>
    );
  }
  if (isFetching) {
    return pageContent(data);
  }
  if (isSuccess && !isFetching) {
    return pageContent(data);
  }
};

export default Goals;
