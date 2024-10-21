import type { AuthToken } from '@/models/auth'
import type { UserInfo, UserRole } from '@/models/user'

export interface LoginRequest {
  email?: string
  username?: string
  password: string
}

export interface LoginResponse {
  userinfo: UserInfo
  token: AuthToken
  role: UserRole
}
