import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HttpRequsetInterceptors, HttpRequsetConfig } from './type'
class HttpRequset {
  instance: AxiosInstance
  interceptors?: HttpRequsetInterceptors
  constructor(config: HttpRequsetConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //添加对应实例的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //添加对应实例的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有实例的请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    //添加所有实例的响应拦截器
    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
  }

  request(config: HttpRequsetConfig): void {
    // 单独请求的请求拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      // 单独请求的响应拦截器
      if (config.interceptors?.responseInterceptor) {
        config = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HttpRequset
