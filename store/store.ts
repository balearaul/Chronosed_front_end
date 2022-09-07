import { configureStore } from "@reduxjs/toolkit";
import creatingGoalReducer from "./slices/creatingGoal";
import menuReducer from "./slices/menu";

const store = configureStore({
  reducer: {
    creatingGoal: creatingGoalReducer,
    menu: menuReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
