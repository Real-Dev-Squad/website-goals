
import { type User } from '~/interfaces/User'

export const transformUsers = (users: any): User[] => {
  const filteredUsers = users
    .filter((user: any) => user.incompleteUserDetails === false) // Filter by profile completion
  return filteredUsers.map((user: any) => transformUser(user))
}

export const transformUser = (user: any): User => {
  const displayName = `${user.first_name} ${user.last_name}`;

  return {
    id: user.id,
    displayName,
    username: user.username,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.picture?.url,
    initials: displayName.trim()
      .toUpperCase()
      .split(" ", 2)
      .map((str) => str.charAt(0))
      .join(""),
  }
}
