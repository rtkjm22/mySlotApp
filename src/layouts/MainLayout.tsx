import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { selectUserInfo } from '@/stores/slice/userSlice'
import { UserInfo } from '@/types/store/user/user'
import { selectIsLogin } from '@/stores/slice/authSlice'
import { useSelector } from 'react-redux'
import { MainLayoutProps } from '@/types/layouts/mainLayout'

const demoImage = 'https://placehold.jp/a6deda/ffffff/150x150.png'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLogin = useSelector(selectIsLogin)
  const userInfo: UserInfo = useSelector(selectUserInfo)

  return (
    <>
      {/* 共通のヘッダーコンポーネント */}
      <header>
        <nav className="bg-white border-gray-200 py-3 px-[200px] dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={demoImage}
                width={30}
                height={30}
                className="block w-8 h-8 object-cover"
                alt=""
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                My app
              </span>
            </Link>

            <div className={`${isLogin ? 'hidden' : 'flex'} items-center`}>
              <Link
                href="/login"
                className="block py-2 mr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white"
              >
                Login
              </Link>
            </div>

            <div className={`${isLogin ? 'flex' : 'hidden'}`}>
              <ul className="flex justify-center items-center font-medium">
                <li>
                  <Link
                    href="/"
                    className="block py-2 mr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/users/${userInfo.user_id}`}
                    className="block py-2 mr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logout"
                    className="block py-2 mr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ページのコンテンツ */}
      <main>{children}</main>

      {/* 共通のフッターコンポーネント */}
      <footer>{/* フッターの内容 */}</footer>
    </>
  )
}

export default MainLayout
