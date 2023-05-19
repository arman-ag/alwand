import type {} from 'redux-thunk/extend-redux';
import { api } from '../../services/api.service';

const getItem = (pageNumber: number) => {
  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await api.get(pageNumber);
      dispatch(getItemsResult({ data, type: 'SUCCESSFUL_RECEIVE' }));
    } catch (e) {
      dispatch(getItemsResult({ error: e, type: 'UNSUCCESSFUL_RECEIVE' }));
    }
  };
};
const getItemsResult = (result) => {
  return result;
};
export const gryItemAction = {
  getItem,
};
