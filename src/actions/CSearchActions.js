import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import {
  NAME_CHANGED,
  SERVER_CHANGED,
  CHARACTER_LOADING,
  CHARACTER_FOUND,
  CHARACTER_SEARCH_FAIL,
  CHARACTER_LIST_CREATE,
  CHARACTER_LIST_FETCH
} from '../actions/types';

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const serverChanged = (server) => {
  return {
    type: SERVER_CHANGED,
    payload: server
  };
};

export const characterFetch = ({ name, server }) => {
  return (dispatch) => {
    console.log("Search for: ", { name }, " on ", { server })
    dispatch({ type: CHARACTER_LOADING })
    setTimeout(() => {
      dispatch({ type: CHARACTER_SEARCH_FAIL })
    }, 5000)
    axios.get(`http://localhost:8080/wowcharacter/${server}/${name}`)
      .then(character => characterFound(dispatch, character));
      // Need to make it seek twice for characters not found then have error
      // .catch(() => {
      //   axios.get(`http://localhost:3000/wowcharacter/${server}/${name}`)
      //     .then(character => characterFound(dispatch, character));
      //     .catch(() => characterNotFound(dispatch))
      // });
  }
}

const characterFound = (dispatch, character) => {
  dispatch({
    type: CHARACTER_FOUND,
    payload: character
  });
  console.log("Character Found");
  Actions.displayCharacter({ type: 'reset' });
}

const characterNotFound = (dispatch) => {
  dispatch({ type: CHARACTER_SEARCH_FAIL })
}

export const characterListAdd = ({ name, server, thumbnail, level, iLvl, HonorableKills }) => {
  const { currentUser } = firebase.auth();
  console.log("characteraddlist", name, currentUser)
  return (dispatch) => {
    firebase.database().ref(`/characters/${currentUser.uid}/character`)
      .push({ name, server, thumbnail, level, iLvl, HonorableKills })
      .then(() => {
        dispatch({ type: CHARACTER_LIST_CREATE });
        Actions.characterList({ type: 'reset' });
      })
  }
}

export const characterListFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/characters/${currentUser.uid}/character`)
      .on('value', snapshot => {
        dispatch({ type: CHARACTER_LIST_FETCH, payload: snapshot.val() });
      });
  };
}
