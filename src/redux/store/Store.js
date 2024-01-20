import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user.slice";
import usersReducer from '../slice/userSlice'


export const store = configureStore({
  reducer: {
    users: userReducer,
    user: usersReducer,
  },
});
