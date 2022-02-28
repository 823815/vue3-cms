import HttpRequset from './request'
import { BASE_URL, TIMEOUT } from './config'

export default new HttpRequset({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
