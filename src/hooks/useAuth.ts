import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer/type';
const useAuth = () => {
  const { result, token, email, password } = useSelector(
    (state: RootState) => state.authentication
  );
  const userToken = localStorage.getItem('token');
  if (userToken) {
    return true;
  }
  if (result) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    return result;
  }
};
export default useAuth;
