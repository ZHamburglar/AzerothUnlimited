import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBzgYuyPJ4KM-3c4D0n9-NSGsZkK33iIqc",
      authDomain: "azerothunlimited-a0334.firebaseapp.com",
      databaseURL: "https://azerothunlimited-a0334.firebaseio.com",
      projectId: "azerothunlimited-a0334",
      storageBucket: "azerothunlimited-a0334.appspot.com",
      messagingSenderId: "259512250923"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
