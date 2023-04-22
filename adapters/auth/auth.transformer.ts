import { type User } from '~/interfaces/User'
import { type SelfInfo } from './auth.type'

export const transformSelfInfoFromApi = (userInfo: any): { info: SelfInfo, user: User } => {
  const info = {
    userId: userInfo?.id,
    roles: {
      archived: userInfo?.roles?.archived,
      member: userInfo?.roles?.member
    },
    status: userInfo?.status,
    incompleteUserDetails: userInfo?.incompleteUserDetails
  }

  const user = {
    id: userInfo?.id,
    username: userInfo?.username,
    firstName: userInfo?.first_name,
    lastName: userInfo?.last_name,
    githubId: userInfo?.github_id,
    githubDisplayName: userInfo?.github_display_name,
    avatarUrl: userInfo?.picture?.url
  }

  return {
    info,
    user
  }
}
