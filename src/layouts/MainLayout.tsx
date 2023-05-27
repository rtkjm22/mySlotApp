import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { selectUserInfo } from '@/stores/slice/userSlice'
import { UserInfo } from '@/types/store/user/user'
import { selectIsLogin } from '@/stores/slice/authSlice'
import { useSelector } from 'react-redux'
import { MainLayoutProps } from '@/types/layouts/mainLayout'

const demoImage = 'https://placehold.jp/a6deda/ffffff/150x150.png'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isLogin = useSelector(selectIsLogin)
  const userInfo: UserInfo = useSelector(selectUserInfo)

  const toggleDarkMode = () => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  const initDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    initDarkMode()
  }, [])

  return (
    <>
      {/* 共通のヘッダーコンポーネント */}
      <header>
        <nav className="bg-gray-800 border-gray-200 py-3 px-[200px] dark:bg-white">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={demoImage}
                width={30}
                height={30}
                className="block w-8 h-8 object-cover"
                alt=""
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-gray-800">
                My app
              </span>
            </Link>

            <div className={`${isLogin ? 'hidden' : 'flex'} items-center`}>
              <Link
                href="/login"
                className="block py-2 mr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 text-white dark:text-gray-800"
              >
                Login
              </Link>
            </div>

            <div className={`${isLogin ? 'flex' : 'hidden'}`}>
              <ul className="flex justify-center items-center font-medium">
                <li>
                  <Link
                    href="/"
                    className="block py-2 mr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 text-white dark:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/users/${userInfo.unique_id}`}
                    className="block py-2 mr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 text-white dark:text-gray-800 dark:border-gray-700"
                  >
                    Profiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logout"
                    className="block py-2 mr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 text-white dark:text-gray-800 dark:border-gray-700"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

            <button
              className="text-white dark:text-gray-800"
              onClick={() => toggleDarkMode()}
            >
              Light/Dark
            </button>
          </div>
        </nav>
      </header>

      {/* ページのコンテンツ */}
      <main className="bg-white dark:bg-gray-900">{children}</main>

      {/* 共通のフッターコンポーネント */}
      <footer className="bg-gray-800 dark:bg-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-800">
            © 2023{' '}
            <Link
              href="https://github.com/rtkjm22/"
              className="hover:underline"
            >
              rtkjm22
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-800 sm:mt-0">
            <li>
              <Link
                href="#"
                className="mr-4 hover:underline md:mr-6 text-white dark:text-gray-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mr-4 hover:underline md:mr-6 text-white dark:text-gray-800"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mr-4 hover:underline md:mr-6 text-white dark:text-gray-800"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default MainLayout
