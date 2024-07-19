import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    loggedUserId: ''
  },
  reducers: {
    changeLogginStatus: (state, action) => {
        state.isLogin = action.payload
      },
      userLoginId : (state,action) => {
        state.loggedUserId = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const { changeLogginStatus, userLoginId } = loginSlice.actions

export default loginSlice.reducer