import axios from '@/utils/useAxios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function UserDetail() {
  const [userInfo, setUserInfo] = useState({})
  const router = useRouter()

  const { user } = router.query

  useEffect(() => {
    ;(async () => {
      const res = await axios.get(`/users/${user}`)
      !res && router.push('/login')
      setUserInfo(res.data)
    })()
  }, [])

  return (
    <>
      <div>{user}</div>
    </>
  )
}

export default UserDetail
