import { configureStore } from "@reduxjs/toolkit";
import dimensions from "./dimensions.slice";
import auth from "./auth.slice";
import newPost from "./newpost.slice";
import saved from "./save.slice";
import messages from "./messages.slice";

export const store = configureStore({
  reducer: {
    dimensions,
    auth,
    newPost,
    saved,
    messages,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Redux by default only store serializable data
        // But in the 'messages' slice, we store a `NodeJS.Timeout` object which is not serializable
        //
        // So we need to tell Redux to ignore this action type and not throw an error
        ignoredActions: ["message/markConversationForDeletion"],
      },
    });
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
