import { type User } from '~/interfaces/User'
import { type ErrorApiBase } from '~/interfaces/ErrorApi'

export type AuthState =
  | {
    kind: 'UNAUTHENTICATED'
    isLoading: boolean
    error?: ErrorApiBase
  }
  | {
    kind: 'AUTHENTICATED'
    isLoading: false
    roles: {
      archived?: boolean
      member?: boolean
    }
    user: User
  }
