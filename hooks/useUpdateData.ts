import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateData = (data: any) => {
  return axios.post(
    "https://europe-west1-chronosed-60642.cloudfunctions.net/updateGoal",
    data
  );
};

const useUpdateData = (toRevalidate: any) => {
  const queryClient = useQueryClient();
  return useMutation(updateData, {
    // onSuccess: () => {
    //   console.log("toRevalidate", toRevalidate);
    //   queryClient.invalidateQueries(toRevalidate);
    // },
  });
};

export default useUpdateData;
