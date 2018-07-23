import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const checkLoggedIn = () => {
  const { currentUser } = firebase.auth();
  console.log("Current User: ", `${currentUser.uid}`)

}
