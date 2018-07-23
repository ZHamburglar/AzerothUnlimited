import {
  SELECT_SERVER
} from '../actions/types'

export default (state = null, action) => {
  console.log(action)
  switch (action.type) {
    case SELECT_SERVER:
      return action.payload;
    default:
      return state;
  }
};
