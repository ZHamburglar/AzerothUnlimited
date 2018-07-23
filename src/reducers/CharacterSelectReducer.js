import {
  CHARACTER_SELECT
} from '../actions/types'

export default (state = null, action) => {
  console.log("Character Select: ", action, "payload: ", action.payload)
  switch (action.type) {
    case CHARACTER_SELECT:
      return action.payload;
    default:
      return state;
  }
};
