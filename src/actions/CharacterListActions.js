import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  CHARACTER_SELECT
 } from './types';


export const selectCharacter = (name) => {
  console.log("Select Characer: ", name)
  return {
    type: CHARACTER_SELECT,
    payload: name
  }
}
