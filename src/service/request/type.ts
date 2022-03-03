import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpRequsetInterceptors<T = AxiosResponse> {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (value: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface HttpRequsetConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HttpRequsetInterceptors<T>
}
