import { useSelector } from 'react-redux';

const useAuth = () => {
  const { result, token } = useSelector((state) => state.authentication);
  const userToken = localStorage.getItem('token');
  if (userToken) {
    return true;
  }
  if (result) {
    localStorage.setItem('token', token);
    return result;
  }
};
export default useAuth;
