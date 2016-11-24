import {is} from 'immutable';
export default function shallowEqual(...props) {
  const arr = [];
  for (let idx = 0; idx < props.length; idx = idx + 2) {
    arr.push(!(props[idx] === props[idx + 1] || is(props[idx], props[idx + 1])));
  }
  return arr.includes(true);
}
