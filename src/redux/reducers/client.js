import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  testactions: ''
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.TEST_ACTIONS:
      return state.set('testactions', action.data);
    default:
      return state;
  }
}
