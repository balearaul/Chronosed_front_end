import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteElement = (id: any) => {
  return axios.post(
    "https://europe-west1-chronosed-60642.cloudfunctions.net/deleteGoal",
    { id }
  );
};

const useDelete = (identifier: any) => {
  const queryClient = useQueryClient();
  return useMutation(deleteElement, {
    onSuccess: () => {
      console.log(identifier);
      queryClient.invalidateQueries(identifier);
    },
  });
};

export default useDelete;
