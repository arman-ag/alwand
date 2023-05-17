import { api } from '../../services/api.service';
interface userType {
  userName: string;
  password: string;
}
const authenticateSend = (user: userType) => {
  return async (dispatch) => {
    try {
      const { data: token } = await api.post(user);
      dispatch(
        authenticateResult({
          type: 'SUCCESSFUL_AUTHENTIC',
          data: { result: true, token, ...user },
        })
      );
    } catch {
      dispatch(
        authenticateResult({ type: 'FAIL_AUTHENTIC', data: { result: false } })
      );
    }
  };
};
const authenticateResult = (result) => {
  return {
    result,
  };
};
export const authenticationAction = {
  authenticateSend,
};
