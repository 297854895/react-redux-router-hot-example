import * as ActionTypes from '../constants/constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export function TestActions(val) {
  return dispatch => {
    dispatch({
      type: ActionTypes.TEST_ACTIONS,
      data: val
    });
  };
}
