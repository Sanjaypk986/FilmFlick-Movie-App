import { configureStore } from '@reduxjs/toolkit'
import reviewReducer from '../features/reviews/reviewSlice'
import loginReducer from '../features/login/loginSlice'

export default configureStore({
  reducer: {
    review: reviewReducer,
    login: loginReducer
  }
})