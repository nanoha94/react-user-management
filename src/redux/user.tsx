import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/api/user";

interface LoginUserType {
  loginUser: (User & { isAdmin: boolean }) | null;
}

const initialState: LoginUserType = {
  loginUser: null,
};

export const setLoginUser = (
  loginUser: (User & { isAdmin: boolean }) | null
) => {
  return (dispatch: Dispatch) => {
    dispatch(userSlice.actions.login({ loginUser }));
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ loginUser: (User & { isAdmin: boolean }) | null }>
    ) => {
      state.loginUser = action.payload.loginUser;
    },
  },
});

export default userSlice.reducer;
