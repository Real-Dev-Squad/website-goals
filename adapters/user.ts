import axios from 'axios'
import { transformUsers } from './user.transformer'
import { type User } from '~/interfaces/User'
import { API } from '~/constants/api'

export const fetchUsers = async (): Promise<User []> => {
  const users: User[] = await axios
    .get(`${API.RDS_BASE_URL}/members`)
    .then(res => transformUsers(res.data.members))
    .catch(error => {
      throw new Error(error)
    })

  return users
}
