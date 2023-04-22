import { defineStore } from 'pinia'
import * as authAdapter from '~/adapters/auth'
import { type AuthState } from '~/interfaces/AuthState'
import { userRepo } from '~/models/User'

type AuthStoreState =
  | {
    isLoading: boolean
    isValid: false
    authInfo: null
  }
  | {
    isLoading: false
    isValid: true
    authInfo: {
      userId: string
      status: string
      roles: {
        archived?: boolean
        member?: boolean
      }
    }
  }

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: (): AuthStoreState => ({
    isLoading: false,
    isValid: false,
    authInfo: null
  }),
  actions: {
    async fetchSelf () {
      if (this.isLoading) return

      this.isLoading = true
      const { info, user } = await authAdapter.getSelf()
      userRepo.save(user)
      this.authInfo = {
        userId: info.userId,
        status: info.status,
        roles: info.roles
      }

      this.isLoading = false
      this.isValid = true
    },
    getSelf (): AuthState {
      if (this.isLoading || !this.isValid) {
        return {
          kind: 'UNAUTHENTICATED',
          isLoading: this.isLoading
        }
      }

      const user = userRepo.find(this.authInfo.userId)
      if (user == null) throw Error('Self user not found in repository')

      return {
        kind: 'AUTHENTICATED',
        isLoading: this.isLoading,
        roles: this.authInfo.roles,
        user
      }
    }
  }
})
