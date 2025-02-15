import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./features/citySlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
