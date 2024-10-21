import axios from 'axios'
import { toast } from 'react-toastify'
import { ENV } from '@/constants/env'
import { isDev } from '@/lib/is'
import type { ApiClientErrorResponse, ApiClientResponse, RequestConfig } from './types'

export const client = axios.create({
  baseURL: ENV.API_CLIENT_URL,
  timeout: 60000,
  headers: {
    // TODO add some default headers
  },
})

client.interceptors.response.use(
  (response) => {
    const data: ApiClientResponse | ApiClientErrorResponse = response.data

    if (data.code === 200) return (data as ApiClientResponse).detail
    if (isDev()) console.warn('[RESPONSE ERROR]', data)

    if (!(response.config as RequestConfig).silence) {
      toast.error((data as ApiClientErrorResponse).errMsg)
    }

    return Promise.reject(new Error((data as ApiClientErrorResponse).errMsg))
  },
  (error) => {
    return Promise.reject(error as Error)
  },
)

export function get<T = unknown>(url: string, config?: RequestConfig) {
  return client.get<unknown, T>(url, config)
}

export function post<T = unknown, D = unknown>(url: string, data?: D, config?: RequestConfig) {
  return client.post<unknown, T>(url, data, config)
}

export function put<T = unknown, D = unknown>(url: string, data?: D, config?: RequestConfig) {
  return client.put<unknown, T>(url, data, config)
}

export function del<T = unknown>(url: string, config?: RequestConfig) {
  return client.delete<unknown, T>(url, config)
}
