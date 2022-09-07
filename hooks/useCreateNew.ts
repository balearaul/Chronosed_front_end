import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addGoal = async (goal: any) => {
  const data = await axios.post(
    "https://europe-west1-chronosed-60642.cloudfunctions.net/createGoal",
    goal.data
  );
  return data;
};

const useCreateNew = () => {
  const queryClient = useQueryClient();
  return useMutation(addGoal, {
    // When mutate is called:
    onMutate: async (newGoal) => {
      // console.log("newGoal", newGoal);
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(newGoal.query_identifier);

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(newGoal.query_identifier);
      // console.log("previousTodos", previousTodos);
      // Optimistically update to the new value
      queryClient.setQueryData(newGoal.query_identifier, (old: any) => {
        return { ...old, data: [...old.data, newGoal.data] };
      });
      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    onSuccess: async (data, variables, previousTodos) => {
      // console.log("data onSuccess", data);
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newGoal, context: any) => {
      queryClient.setQueryData(newGoal.query_identifier, context.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: (data, error, newGoal) => {
      queryClient.invalidateQueries(newGoal.query_identifier);
      queryClient.invalidateQueries(["goalsTime"]);
    },
  });
};

export default useCreateNew;
