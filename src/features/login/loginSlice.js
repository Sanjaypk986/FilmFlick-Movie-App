// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    loggedUserId: false
  },
  reducers: {
    changeLogginStatus: (state, action) => {
      console.log("Updating login status:", action.payload);
      state.isLogin = action.payload;
    },
    userLoginId: (state, action) => {
      console.log("Updating user ID:", action.payload);
      state.loggedUserId = action.payload;
    }
  }
});

export const { changeLogginStatus, userLoginId } = loginSlice.actions;

export default loginSlice.reducer;
