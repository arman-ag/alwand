import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
import cards from './cards.reducer';

const allReducer = combineReducers({
  authentication,
  cards,
});
export default allReducer;
