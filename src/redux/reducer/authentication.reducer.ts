const initial = {
  authentication: false,
};
const authentication = (state = initial, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_AUTHENTIC':
      return { authentication: action.authentication };

    default:
      return { authentication: false };
  }
};
export default authentication;
