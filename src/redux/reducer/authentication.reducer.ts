const initial = {
  authentication: false,
};
const authentication = (state = initial, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_AUTHENTIC':
      return { ...action.data };
    case 'FAIL_AUTHENTIC':
      return { ...action.data };
    default:
      return { authentication: false };
  }
};
export default authentication;
