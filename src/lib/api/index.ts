import axios from 'axios';

export const uri = 'https://www.reddit.com';

export const get = (path: string) => {
  return axios.get(uri + path);
};
