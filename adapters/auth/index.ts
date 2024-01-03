import axios from 'axios'
import { transformSelfInfoFromApi, transformGoalTokenFromApi } from './auth.transformer'
import { type SelfInfo } from './auth.type'
import { getConfig } from '~/config'

export const getSelf = async (): Promise<SelfInfo> => {
  const config = getConfig();
  const response = await axios
    .get(`${config.RDS_API}/users/self/`, { withCredentials: true })
    .then(res => transformSelfInfoFromApi(res.data))

  return response
}

export const getGoalApiCredentials = async (): Promise<{
  token: {
    exp: number,
    access: string,
  },
  id: string,
}> => {
  const config = getConfig();
  const response = await axios
    .get(`${config.RDS_API}/goals/token/`, { withCredentials: true })
    .then(res => transformGoalTokenFromApi(res.data))

  return response
}