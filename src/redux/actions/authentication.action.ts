import type {} from 'redux-thunk/extend-redux';
import { api } from '../../services/api.service';
import { userType } from './types';

const authenticateSend = (user: userType) => {
  return async (dispatch) => {
    try {
      const {
        data: { token },
      } = await api.post(user);
      dispatch(
        authenticateResult({
          type: 'SUCCESSFUL_AUTHENTIC',
          data: { result: true, token, alertFire: false, ...user },
        })
      );
    } catch {
      dispatch(
        authenticateResult({
          type: 'FAIL_AUTHENTIC',
          data: { result: false, alertFire: true },
        })
      );
    }
  };
};
const authenticateResult = (result) => {
  return result;
};
export const authenticationAction = {
  authenticateSend,
  authenticateResult,
};
