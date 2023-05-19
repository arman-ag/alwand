const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
const token = localStorage.getItem('token');
const initial = token
  ? { email, password, token }
  : {
      authentication: false,
    };
const authentication = (state = initial, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_AUTHENTIC':
      return action.data;
    case 'FAIL_AUTHENTIC':
      return { ...action.data };
    default:
      return { ...state };
  }
};
export default authentication;
