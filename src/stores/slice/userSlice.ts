import { User, UserInfo } from '@/types/store/user/user'
import { createSlice } from '@reduxjs/toolkit'

const initialState: User = {
  userInfo: {
    id: 0,
    name: '',
    email: '',
    user_id: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action): void => {
      state.userInfo = action.payload.userInfo
    }
  }
})

export const { setUserInfo } = userSlice.actions

export const selectUserInfo = (state: { user: { userInfo: UserInfo } }) =>
  state.user.userInfo

export default userSlice.reducer
