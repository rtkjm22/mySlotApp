import { Auth, IsLogin } from '@/types/store/auth/auth'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Auth = {
  isLogin: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state, action): void => {
      state.isLogin = action.payload
    }
  }
})

export const { isLogin } = authSlice.actions
export const selectIsLogin = (state: { auth: Auth }) => state.auth.isLogin

export default authSlice.reducer