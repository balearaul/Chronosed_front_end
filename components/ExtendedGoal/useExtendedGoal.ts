// redux
import { useDispatch } from "react-redux";
import { stopCreatingGoal } from "store/slices/creatingGoal";
import { useData } from "hooks/useData";
import { processDate } from "components/GoalComponents/Time/TimeDisplay/functions";

const useExtendedGoal = (goal_id: any) => {
  const dispatch = useDispatch();

  const closeNewGoalForm = () => {
    // Close new goal in case it is open
    // This function will be defined and reused in the "useNewGoal" hook after creating hook
    dispatch(stopCreatingGoal());
  };

  // get this goal from database
  const {
    isLoading,
    data: parent_data,
    isError,
    error,
  } = useData(
    goal_id,
    {
      id: goal_id,
    },
    {}
  );

  // get all children of this goal
  const {
    isLoading: is_loading_children,
    data: childrenData,
    isError: is_error_children,
    error: error_children,
    // modified children to goals
  } = useData(
    ["goals", goal_id],
    {
      parent: goal_id,
    },
    {}
  );

  const parnet_data_obj = parent_data?.data[0];

  let from_date, to_date;
  let ancestors: any;

  if (parnet_data_obj) {
    from_date = processDate(parnet_data_obj.from);
    to_date = processDate(parnet_data_obj.to);
    ancestors = parnet_data_obj.ancestors.concat([
      {
        id: goal_id,
        title: parnet_data_obj.title,
      },
    ]);
  }

  // Query Key to revalidate in case of update of children (ex: new child)
  // modified children to goals
  const toRevalidate = ["goals", goal_id];

  return {
    closeNewGoalForm,
    parent_data,
    childrenData,
    is_loading_children,
    parnet_data_obj,
    from_date,
    to_date,
    ancestors,
    toRevalidate,
  };
};

export default useExtendedGoal;
