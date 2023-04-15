import axios from 'axios';

export const fetchUsers = async () => {
  const userApiResponse = await axios.get('https://api.realdevsquad.com/members');
  
}