import axios from "axios";
import { QueryClient, useQuery, useQueryClient, QueryCache } from "react-query";

const getTodos = async (filter: any, sort: any) => {
  return axios.get(
    "https://europe-west1-chronosed-60642.cloudfunctions.net/getGoals",
    {
      params: { sort: sort, filter: filter },
    }
  );
};

// EXAMPLE GETTING INITIAL DATA FROM CACHE

// const getInitialData: any = (prefetch: any, queryIdentifier: any) => {
//   console.log("begin", new Date().getTime());
//   if (prefetch) {
//     const queryClient = useQueryClient();
//     const queries: any = queryClient.getQueriesData("goals");
//     console.log("queries", queries);
//     for (const query of queries) {
//       const search_result = query[1].data.find(
//         (element: any) => element._id == queryIdentifier
//       );
//       if (search_result) {
//         console.log("found query", search_result);
//         return { data: [search_result] };
//       }
//     }
//   }
//   console.log("end", new Date().getTime());
// };

export const useData = (queryIdentifier: any, filter: any, sort: any) => {
  const queryClient = useQueryClient();

  // queryClient.invalidateQueries(queryIdentifier);
  const queryData = useQuery(
    queryIdentifier,
    getTodos.bind(null, filter, sort)
  );
  return queryData;
};

export const useDataChildren = (children: any) => {
  const queryClient = useQueryClient();

  for (const child of children) {
    queryClient.prefetchQuery(
      // modified children to goals

      ["goals", child],
      getTodos.bind(null, { id: child })
    );
  }
};
