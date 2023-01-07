import { configureStore } from "@reduxjs/toolkit";

// Slice imports.
import userReducer  from "./features/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
