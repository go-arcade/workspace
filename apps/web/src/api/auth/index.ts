import { post } from '../client'
import type { LoginRequest, LoginResponse } from './types'

function login(data: LoginRequest) {
  return post<LoginResponse>(
    '/user/login',
    {
      ...data,
      password: btoa(data.password),
    },
    { silence: true },
  )
}

export default {
  login,
}
