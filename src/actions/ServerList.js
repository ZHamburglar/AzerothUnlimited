import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  SELECT_SERVER
 } from './types';


export const selectServer = (ServerId) => {
  console.log("Hello", ServerId)
  return {
    type: SELECT_SERVER,
    payload: ServerId
  }
}
