import axios from 'axios';
interface dataType {
  email: string;
  password: string;
}
const get = <A>(url: string) => {
  return axios.request<A>({
    method: 'GET',
    url,
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
