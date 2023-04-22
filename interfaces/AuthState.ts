import { type User } from '~/interfaces/User'

export type AuthState =
  | {
    kind: 'UNAUTHENTICATED'
    isLoading: boolean
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
