import * as authAdapter from '~/adapters/auth'
import { getConfig } from '~/config'

export const useAuthStore = defineStore('auth', () => {
  const config = getConfig()
  const user = ref()
  const isLoading = ref(false)
  const token = useCookie(`goals_token_${config.ENV}`, {
    maxAge: 60 * 60 * 24 * 30, // 30 days 
    sameSite: 'lax'
  })

  const setToken = (newToken: string) => {
    token.value = newToken
  }

  const setUser = (user: any) => {
    user.value = user
  }

  const signin = async () => {
    try {
      isLoading.value = true
      const [selfData, credentials] = await Promise.all([authAdapter.getSelf(), authAdapter.getGoalApiCredentials()])

      user.value = selfData
      token.value = credentials.token.access
      isLoading.value = false
    } catch (error) {
      user.value = undefined
      token.value = undefined
      isLoading.value = false
    }
  }

  const signout = () => {
    token.value = undefined
    user.value = undefined
  }

  return {
    user,
    token,
    setToken,
    setUser,
    signin,
    signout,
    isLoading,
  }
})