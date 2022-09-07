import { useEffect, useState } from "react";
import { processDate } from "../Time/TimeDisplay/functions";
import { useRouter } from "next/router";
import useUpdateData from "hooks/useUpdateData";
import useDelete from "hooks/useDelete";

// Redux
import { useDispatch } from "react-redux";
import { stopCreatingGoal } from "store/slices/creatingGoal";

const useGoal = (goal: any) => {
  const dispatch = useDispatch();
  const closeNewGoalForm = () => {
    // Close new goal in case it is open
    // This function will be defined and reused in the "useNewGoal" hook after creating hook
    dispatch(stopCreatingGoal());
  };

  // Extracting id
  const _id = goal._id;

  const { mutate: updateData } = useUpdateData(null);

  const identifier = goal.parent == "root" ? "goals" : ["goals", goal.parent];
  const { mutate: DeleteByID } = useDelete(identifier);

  const router = useRouter();
  // GoalIsOpen state
  const [goalIsOpen, setGoalIsOpen] = useState(false);

  // Computing date from goal
  const from = processDate(goal.from);
  const to = processDate(goal.to);
  const [date, setDate] = useState({ from, to });
  const [title, setTitle] = useState(goal.title);

  useEffect(() => {
    setTitle(goal.title);
  }, [goal.title]);

  const toggleGoalIsOpen = () => {
    setGoalIsOpen(!goalIsOpen);
  };

  const handleGloalClick = () => {
    if (!goalIsOpen) {
      router.push(`/goals/${_id}`);
    }
  };

  const removeTime = () => {
    //   This function remove the Time property from the goal
    //   Update local state

    const newDate = {
      from: { date: false, time: false, val: null },
      to: { date: false, time: false, val: null },
    };
    setDate(newDate);
    //   Update on the server
    handleUpdateTime(newDate, _id);
  };

  const handleUpdateTime = (date: any, id: any) => {
    updateData({
      updatedData: date,
      id: id,
    });
  };

  const deleteElement = () => {
    DeleteByID(_id);
  };

  return {
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
  };
};

export default useGoal;
