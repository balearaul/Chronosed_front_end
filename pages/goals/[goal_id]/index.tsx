import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import ExtendedGoal from "components/ExtendedGoal";

const Goals = (props: any) => {
  const router = useRouter();
  const goal_id = router.query.goal_id;
  return (
    <>
      <ExtendedGoal goal_id={goal_id} />
    </>
  );
};

export default Goals;
