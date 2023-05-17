import axios from 'axios';
interface dataType {
  email: string;
  password: string;
}
const get = (page: number) => {
  return axios.request({
    method: 'get',
    url: `${import.meta.env.VITE_API_CARDS}?page={${page}}`,
  });
};
const post = (data: dataType) => {
  return axios.request({
    method: 'post',
    url: `${import.meta.env.VITE_API_DEV}/login`,
    data,
  });
};

export const api = {
  get,
  post,
};
