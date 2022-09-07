import axios from "axios";
import { QueryClient, useQuery, useQueryClient, QueryCache } from "react-query";

const getTodos = async (filter: any, sort: any) => {
  return axios.get(
    "https://europe-west1-chronosed-60642.cloudfunctions.net/getGoalsTime",
    {
      params: { sort: sort, filter: filter },
    }
  );
};

export const useDataTime = (
  queryIdentifier: any,
  filter: any,
  sort: any,
  prefetch = false
) => {
  const queryClient = useQueryClient();

  // queryClient.invalidateQueries(queryIdentifier);
  const queryData = useQuery(
    queryIdentifier,
    getTodos.bind(null, filter, sort)
  );
  return queryData;
};
