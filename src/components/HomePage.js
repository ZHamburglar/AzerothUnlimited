import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Card, CardSection, Input, Button, Spinner } from './common';

class HomePage extends Component {

  render() {
    return (
      <Image source={require('../images/orc.jpg')} style={styles.backgroundImage} />
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: 300
  }
};


export default HomePage;
