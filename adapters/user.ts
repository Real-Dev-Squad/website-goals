import axios from 'axios'
import { transformUsers } from './user.transformer'
import { type User } from '~/interfaces/User'
import { getConfig } from '~/config'

export const fetchUsers = async (): Promise<User []> => {
  const config = getConfig();

  const users: User[] = await axios
    .get(`${config.RDS_API}/members`)
    .then(res => transformUsers(res.data.members))
    .catch(error => {
      throw new Error(error)
    })

  return users
}
