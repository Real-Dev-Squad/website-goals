import axios from 'axios';
import { transformUsers } from './user.transformer';

export const fetchUsers = async () => {
  const userApiResponse = await axios
    .get('https://api.realdevsquad.com/members')
    .then(res => transformUsers(res.data.members))
    .catch(error => {
      throw new Error(error);
    })

  return userApiResponse;
}