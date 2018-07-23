import {
  NAME_CHANGED,
  SERVER_CHANGED,
  CHARACTER_LOADING,
  CHARACTER_FOUND,
  CHARACTER_SEARCH_FAIL,
  CHARACTER_LIST_FETCH,
  CHARACTER_LIST_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  server: '',
  thumbnail: '',
  level: '',
  iLvl: '',
  HonorableKills: '',
  loading: false,
  error: '',
  character: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NAME_CHANGED:
      console.log('Character Name: ', action.payload)
      return {...state, name: action.payload};
    case SERVER_CHANGED:
      console.log('Server Change: ', action.payload)
      return {...state, server: action.payload};
    case CHARACTER_LOADING:
      console.log('Character is Searching', action.payload);
      return {...state, loading: true, error: ''};
    case CHARACTER_FOUND:
      console.log('Character Found', action.payload);
      return {...state,
        character: action.payload,
        error: '',
        loading: false,
        // name: '',
        // server: ''
      };
    case CHARACTER_SEARCH_FAIL:
      return {...state,
        error: 'Character Not Found',
        loading: false
      }
    case CHARACTER_LIST_CREATE:
      console.log("Character List Added; INITIAL_STATE now")
      return INITIAL_STATE
    default:
      return state;
  };
};
