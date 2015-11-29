import { combineReducers } from 'redux'
import {MOVE_CHESS, RETURN_CHESS} from '../action.js'

function chess(state=[], action) {
  switch (action.type) {
    case MOVE_CHESS:
      return [
        ...state,
        action.txtValue
      ];
    case RETURN_CHESS:
      return state.splice(-1, 1);
    default:
      return state;
  }
}

const Reducers = combineReducers({
  chess
});

export default Reducers;

