import axios from '@/utils/axiosInstance'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'

const useAxios = (url: string, method: string, error?: String) => {
  useEffect(() => {
    ;(async () => {
      try {
        const res = axios(url, {
          method,
          withCredentials: true
        })
      } catch (e) {
        !error && console.error(e)
        console.error(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url])
}

export default useAxios
