import { useState } from 'react'
import { AxiosResponse } from 'axios'
import axios from '@/utils/useAxios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/stores/slice/userSlice'
import { isLogin } from '@/stores/slice/authSlice'

function Login() {
  const [email, setEmail] = useState('buz@example.com')
  const [password, setPassword] = useState('password111')
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res: AxiosResponse = await axios.post('/login', {
        email,
        password
      })
      if (res.status !== 201) throw new Error('リクエストに失敗しました。')
      const user_id = res.data.userInfo?.user_id
      if (!user_id) throw new Error('ユーザー情報を取得できませんでした。')
      dispatch(setUserInfo(res.data))
      dispatch(isLogin(true))
      router.push(`/users/${user_id}`)
    } catch (error) {
      console.error(error)
      // ログインが失敗した場合は、ここでエラー処理を行う
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
      </label>
      <label>
        Password:
        <input
          className="text-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
