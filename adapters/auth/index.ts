import axios, { isAxiosError } from 'axios'
import { transformSelfInfoFromApi } from './auth.transformer'
import { type ApiResponse } from '~/interfaces/ApiResponse'
import { type User } from '~/interfaces/User'
import { type SelfInfo } from './auth.type'
import {
  type ErrorApiForbidden,
  type ErrorApiUnauthorized,
  type ErrorApiUnavailable,
  type ErrorApiNotFound,
  type ErrorApiBase
} from '~/interfaces/ErrorApi'
import { API } from '~/constants/api'

type GetSelfResponse = ApiResponse<
{
  user: User
  info: SelfInfo
},
ErrorApiForbidden | ErrorApiUnauthorized | ErrorApiUnavailable | ErrorApiNotFound | ErrorApiBase
>

export const getSelf = async (): Promise<GetSelfResponse> => {
  const response: GetSelfResponse = await axios
    .get(`${API.RDS_BASE_URL}/users/self/`, { withCredentials: true })
    .then(res => ({ data: transformSelfInfoFromApi(res.data) }))
    .catch((error) => {
      if (isAxiosError(error)) {
        if (error.response != null) {
          const responseData = error.response.data
          return {
            error: {
              status: responseData.statusCode,
              error: responseData.error,
              message: responseData.message
            }
          }
        }
      }
      throw error // or Log here
    })
  return response
}
