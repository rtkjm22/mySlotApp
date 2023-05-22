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
        <div className="w-1/3 border border-gray-800 bg-white rounded-xl shadow-sm dark:border-white dark:bg-gray-800">
          <div className="p-5 text-center">
            <h2 className="text-[50px] mb-8 text-gray-800 dark:text-white">
              Can I log out?
            </h2>
            <button
              onClick={handleLogout}
              className="border rounded px-6 py-3 bg-gray-800 dark:bg-white hover:bg-white dark:hover:bg-gray-800 text-white dark:text-gray-800 hover:text-gray-800 dark:hover:text-white hover:border-gray-800  dark:hover:border-white transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout
