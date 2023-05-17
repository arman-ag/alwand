import { api } from '../../services/api.service';

const getItem = () => {
  return async (dispatch) => {
    try {
      const {
        data: { data },
      } = await api.get(1);
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
