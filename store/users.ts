import { defineStore } from 'pinia'
import * as userAdapter from '~/adapters/user'
import { userRepo } from '~/models/User'

export const useUsersStore = defineStore({
  id: 'user-store',
  state: () => ({
    isLoading: false,
    isValid: false
  }),
  actions: {
    async fetchUsers () {
      if (this.isValid) return

      this.isLoading = true
      const users = await userAdapter.fetchUsers()

      userRepo.save(users)

      this.isValid = true
      this.isLoading = false
    }
  },
  getters: {
    getUserById: () => {
      return (userId: string) => {
        const user = userRepo.find(userId)
        if (user == null) throw Error('User not found')

        return user
      }
    },
    all: () => {
      return () => {
        return userRepo.all()
      }
    }
  }
})
