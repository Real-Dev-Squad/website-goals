import { URL } from '../constant/url'

const getUsers = () => {
  const baseURL = `${URL.BASE_RDS}/members`

  return fetch(baseURL)
    .then(res => res.json())
    .then(res => res.members)
}

export default {
  getUsers
}
