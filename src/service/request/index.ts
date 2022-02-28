import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

class HttpRequset {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      res.data
    })
  }
}

export default HttpRequset
