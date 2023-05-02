import { defineStore } from 'pinia'
import * as authAdapter from '~/adapters/auth'
import { type AuthState } from '~/interfaces/AuthState'
import { type ErrorApiBase } from '~/interfaces/ErrorApi'
import { userRepo } from '~/models/User'

type AuthStoreState =
  | {
    kind: 'UNAUTHENTICATED'
    isLoading: boolean
    error: null
    authInfo: null
  }
  | {
    kind: 'ERRORED'
    isLoading: false
    error: ErrorApiBase
    authInfo: null
  }
  | {
    kind: 'AUTHENTICATED'
    isLoading: false
    error: null
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
    kind: 'UNAUTHENTICATED',
    isLoading: false,
    error: null,
    authInfo: null
  }),
  actions: {
    async fetchSelf () {
      if (this.isLoading) return

      this.isLoading = true

      try {
        const { data, error } = await authAdapter.getSelf()
        if (error != null) {
          this.$patch({
            kind: 'ERRORED',
            error,
            isLoading: false,
            authInfo: null
          })
        } else if (data != null) {
          this.$patch({
            kind: 'AUTHENTICATED',
            authInfo: data.info,
            isLoading: false,
            error: null
          })
          userRepo.save(data.user)
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
  getters: {
    getAuthState (state): AuthState {
      if (state.kind === 'UNAUTHENTICATED') {
        return {
          kind: 'UNAUTHENTICATED',
          isLoading: state.isLoading
        }
      } else if (state.kind === 'ERRORED') {
        return {
          kind: 'UNAUTHENTICATED',
          isLoading: false,
          error: state.error
        }
      } else {
        const user = userRepo.find(state.authInfo.userId)
        if (user == null) throw new Error('User not found in repository')

        return {
          kind: 'AUTHENTICATED',
          isLoading: false,
          roles: state.authInfo.roles,
          user
        }
      }
    }
  }
})
