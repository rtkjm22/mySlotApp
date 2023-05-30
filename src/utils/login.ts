import { AxiosResponse } from 'axios'
import axios from '@/utils/axiosInstance'
import { setUserInfo } from '@/stores/slice/userSlice'
import { isLogin } from '@/stores/slice/authSlice'
import { Dispatch, AnyAction } from '@reduxjs/toolkit'
import { NextRouter } from 'next/router'

export const login = async (email: string, password: string, dispatch: Dispatch<AnyAction>, router: NextRouter) => {
  try {
    const res: AxiosResponse = await axios.post('/login', {
      email,
      password
    })
    if (res.status !== 201) throw new Error('リクエストに失敗しました。')
    const unique_id = res.data.userInfo?.unique_id
    if (!unique_id) throw new Error('ユーザー情報を取得できませんでした。')
    dispatch(setUserInfo(res.data))
    dispatch(isLogin(true))
    router.push(`/users/${unique_id}`)
  } catch (error) {
    console.error(error)
    // ログインが失敗した場合は、ここでエラー処理を行う
  }
}