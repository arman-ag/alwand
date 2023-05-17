import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
const allReducer = combineReducers({
  authentication,
});
export default allReducer;
