import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/stores/slice/authSlice'
import { useRouter } from 'next/router'

function Logout() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(logout())
    router.push('/login')
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-1/3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5 text-center">
            <h2 className='text-[50px] mb-8'>Can I log out?</h2>
            <button onClick={handleLogout} className=' border border-gray-200 rounded px-6 py-3 hover:text-gray-800 hover:bg-white transition-all'>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout
