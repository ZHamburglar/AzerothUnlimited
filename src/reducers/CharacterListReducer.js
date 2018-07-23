import {
  CHARACTER_LIST_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTER_LIST_FETCH:
      console.log("Getting Character List", action)
      return action.payload;
    default:
      return state;
  }
}
