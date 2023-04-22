import axios from 'axios'
import { transformSelfInfoFromApi } from './auth.transformer'
import { type User } from '~/interfaces/User'
import { type SelfInfo } from './auth.type'

export const getSelf = async (): Promise<{ info: SelfInfo, user: User }> => {
  const self = await axios
    .get('https://api.realdevsquad.com/users/self/', { withCredentials: true })
    .then(res => transformSelfInfoFromApi(res.data))

  return self
}
