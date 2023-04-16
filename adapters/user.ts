import axios from 'axios';
import { transformUsers } from './user.transformer';
import { User } from '~/interfaces/User';

export const fetchUsers = async () => {
  const users: Array<User> = await axios
    .get('https://api.realdevsquad.com/members')
    .then(res => transformUsers(res.data.members))
    .catch(error => {
      throw new Error(error);
    })

  return users;
}