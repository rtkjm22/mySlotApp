import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import authSlice from './slice/authSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice
})

export default rootReducer
