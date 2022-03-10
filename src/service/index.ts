import HttpRequset from './request'
import { BASE_URL, TIMEOUT } from './request/config'
import LocalCache from '@/utils/cache'

const hyRequest = new HttpRequset({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = LocalCache.getCatch('token')
      if (token) {
        if (config.headers === undefined) {
          config.headers = {}
        }
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})
export default hyRequest
