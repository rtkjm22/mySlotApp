import { selectIsLogin } from '@/stores/slice/authSlice'
import { selectUserInfo } from '@/stores/slice/userSlice'
import { UserInfo } from '@/types/store/user/user'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function UserDetail() {
  const router = useRouter()
  const isLogin = useSelector(selectIsLogin)
  const userInfo: UserInfo = useSelector(selectUserInfo)

  useLayoutEffect(() => {
    !isLogin && router.push('/login')
  }, [])

  return <>{userInfo.id}</>
}

export default UserDetail
