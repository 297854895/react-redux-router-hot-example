import * as ActionTypes from '../constants/constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export function AddNotification(val) {
  return dispatch => {
    dispatch({
      type: ActionTypes.ADD_NOTIFICATION,
      data: val
    });
  };
}
export function RemoveNotification() {
  return dispatch => {
    dispatch({
      type: ActionTypes.REMOVE_NOTIFICATION
    });
  };
}
