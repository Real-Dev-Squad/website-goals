import { type SelfInfo } from './auth.type'
import { transformUser } from '~/adapters/user.transformer'

export const transformSelfInfoFromApi = (userInfo: any): SelfInfo => {
  return {
    ...transformUser(userInfo),
    status: userInfo?.status,
    incompleteUserDetails: userInfo?.incompleteUserDetails,
    roles: {
      archived: userInfo?.roles?.archived,
      member: userInfo?.roles?.member,
    },
  }
}

export const transformGoalTokenFromApi = (response: any): {
  token: {
    exp: number,
    access: string,
  },
  id: string,
} => {
  return {
    token: {
      exp: response?.user?.token?.exp,
      access: response?.user?.token?.access,
    },
    id: response?.user?.id,
  }
}