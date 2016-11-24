import * as ActionTypes from '../constants/constants';
import {fromJS} from 'immutable';
const initState = {
  Notification: [],
  currentShow: 'home'
};
export default function(state = fromJS(initState), action) {
  switch (action.type) {
    case ActionTypes.REMOVE_NOTIFICATION:
    	const Noti_ = state.get('Notification');
    	const newNoti_ = Noti_.shift();
      return state.set('Notification', newNoti_);
    case ActionTypes.ADD_NOTIFICATION:
    	const Noti = state.get('Notification');
    	const newNoti = Noti.push(fromJS(action.data));
      return state.set('Notification', newNoti);
    default:
      return state;
  }
}
