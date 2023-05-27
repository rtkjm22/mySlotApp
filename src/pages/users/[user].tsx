import Image from 'next/image'
import { selectIsLogin } from '@/stores/slice/authSlice'
import { selectUserInfo, setUserInfo } from '@/stores/slice/userSlice'
import { UserInfo } from '@/types/store/user/user'
import axios from '@/utils/axiosInstance'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function UserDetail() {
  const router = useRouter()
  const dispatch = useDispatch()
  const isLogin = useSelector(selectIsLogin)
  const userInfo: UserInfo = useSelector(selectUserInfo)
  const unique_id = router.query

  const demoImage = 'https://placehold.jp/a6deda/ffffff/150x150.png'

  useEffect(() => {
    ;(async () => {
      !isLogin && router.push('/login')
      await axios
        .get(`/users/${unique_id}`)
        .then((res) => {
          if (res.status !== 200) throw new Error()
          dispatch(setUserInfo(res.data.user))
        })
        .catch((e) => {
          router.push('/login')
        })
    })()
  }, [])

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-20">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-gray-900 dark:bg-white p-3 border-t-4 border-green-400 mb-4">
                <div className="image overflow-hidden">
                  <Image
                    className="h-auto w-full mx-auto"
                    src={demoImage}
                    height={500}
                    width={500}
                    alt=""
                  />
                </div>
                <h1 className="text-white dark:text-gray-900  font-bold text-xl leading-8 my-1">
                  Jane Doe
                </h1>
                <h3 className="text-white dark:text-gray-900 font-lg text-semibold leading-6">
                  Owner at Her Company Inc.
                </h3>
                <p className="text-sm text-white dark:text-gray-900 hover:text-gray-900 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
                <ul className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:text-white hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 dark:bg-white p-3 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-white dark:text-gray-900 text-xl leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <span>Similar Profiles</span>
                </div>
                <div className="grid grid-cols-3">
                  <div className="text-center my-2">
                    <Image
                      className="h-16 w-16 rounded-full mx-auto"
                      src={demoImage}
                      height={500}
                      width={500}
                      alt=""
                    />
                    <a href="#" className="text-white dark:text-gray-900">
                      Kojstantin
                    </a>
                  </div>
                  <div className="text-center my-2">
                    <Image
                      className="h-16 w-16 rounded-full mx-auto"
                      src={demoImage}
                      height={500}
                      width={500}
                      alt=""
                    />
                    <a href="#" className="text-white dark:text-gray-900">
                      James
                    </a>
                  </div>
                  <div className="text-center my-2">
                    <Image
                      className="h-16 w-16 rounded-full mx-auto"
                      src={demoImage}
                      height={500}
                      width={500}
                      alt=""
                    />
                    <a href="#" className="text-white dark:text-gray-900">
                      Natie
                    </a>
                  </div>
                  <div className="text-center my-2">
                    <Image
                      className="h-16 w-16 rounded-full mx-auto"
                      src={demoImage}
                      height={500}
                      width={500}
                      alt=""
                    />
                    <a href="#" className="text-white dark:text-gray-900">
                      Casey
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-gray-900 dark:bg-white p-3 shadow-sm rounded-sm mb-4">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span className="tracking-wide text-white dark:text-gray-900">
                    About
                  </span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2 text-white dark:text-gray-900">
                      <div className="px-4 py-2 font-semibold">ID</div>
                      <div className="px-4 py-2">{+userInfo.unique_id}</div>
                    </div>
                    <div className="grid grid-cols-2 text-white dark:text-gray-900">
                      <div className="px-4 py-2 font-semibold">Name</div>
                      <div className="px-4 py-2">{userInfo.name}</div>
                    </div>
                    <div className="grid grid-cols-2 text-white dark:text-gray-900">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">{userInfo.email}</div>
                    </div>
                  </div>
                </div>
                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Show Full Information
                </button>
              </div>

              <div className="bg-gray-900 dark:bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      <span className="tracking-wide text-white dark:text-gray-900">
                        Experience
                      </span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </span>
                      <span className="tracking-wide text-white dark:text-gray-900">
                        Education
                      </span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Bachelors Degreen in LPU
                        </div>
                        <div className="text-white dark:text-gray-900 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail
