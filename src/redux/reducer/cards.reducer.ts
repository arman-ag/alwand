const initial = {
  data: [],
};
const cards = (state = initial, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_RECEIVE':
      return { data: action.data };
    case 'UNSUCCESSFUL_RECEIVE':
      return { ...action.error };
    default:
      return state;
  }
};
export default cards;
