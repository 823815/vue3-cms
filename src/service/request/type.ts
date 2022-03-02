import type { AxiosRequestConfig } from 'axios'

export interface HttpRequsetInterceptors {
  requestInterceptor?: (value: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (value: any) => any
  responseInterceptorCatch?: (error: any) => any
}
export interface HttpRequsetConfig extends AxiosRequestConfig {
  interceptors?: HttpRequsetInterceptors
}
