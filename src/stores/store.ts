import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import authSlice from './authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  }
})

export default store
