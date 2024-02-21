import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// registerUser
// loginUser
// logoutUser

import type { UserType } from "../../misc/types";
import { dummyUsers } from "./dummyUsers";

type InitialState = {
  users: Array<UserType>;
};

const initialState: InitialState = {
  users: dummyUsers,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// actions: use in components
const {} = usersSlice.actions;
// reducer: pass into store config
const usersReducer = usersSlice.reducer;

export {};
export default usersReducer;
