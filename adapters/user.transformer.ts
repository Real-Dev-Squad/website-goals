
import { type User } from '~/interfaces/User'

export const transformUsers = (users: any): User[] => {
  const filteredUsers = users
    .filter((user: any) => user.incompleteUserDetails === false) // Filter by profile completion
  return filteredUsers.map((user: any) => transformUser(user))
}

export const transformUser = (user: any): User => {
  return {
    id: user.id,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    githubDisplayName: user.github_display_name,
    githubId: user.github_id,
    avatarUrl: user.picture?.url
  }
}
