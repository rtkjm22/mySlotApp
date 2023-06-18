import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import authSlice from './slice/authSlice'
import scoreSlice from './slice/scoreSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  score: scoreSlice
})

export default rootReducer
