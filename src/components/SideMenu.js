import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import firebase from 'firebase';
import { checkLoggedIn, LogoutUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';



class SideMenu extends Component {

  componentWillMount(){
    const currentUser = firebase.auth();
    console.log("Mounted ", this.props.user)
  }

  componentDidUpdate(){
    this.renderLoginLogout.bind(this)
    console.log("Component did update", this.props.user)
  }

  sideMenuPress() {
    console.log("Side Menu was Press");
    // this.props.checkLoggedIn()
    Actions.homepage({ type: 'reset'})
  }

  sideMenuServer() {
    console.log("What is your plan")
    Actions.serverList({ type: 'reset' });
  }

  myCharacterList() {
    console.log("My Character List")
    Actions.characterList({ type: 'reset' });
  }

  characterSearch(){
    Actions.searchCharacter({ type: 'reset' });
  }

  renderCharacterList(){
    console.log('rendering character list')
  }

  renderCharacterList(){

    console.log('rendering character list')
    if (this.props.user){
      console.log("Character list")
      return (
        <Text style={{ fontSize: 20 }} onPress={this.myCharacterList.bind(this)}>
          MY CHARACTER LIST
        </Text>
      )
    } else {
      console.log("no character list")
    }
  }

  renderLoginLogout(){

    console.log("Rendering login button?")
    if (this.props.user){
      console.log("THE USER IS LOGGED IN!")
      return (
        <Text style={{ fontSize: 20 }} onPress={this.props.LogoutUser}>
          Log Out
        </Text>
      )
    } else {
      console.log("Auth Not Found Please log in.")
      return (
        <Text style={{ fontSize: 20 }}
          onPress={()=> {
            console.log("Login Page")
            Actions.auth({ type: 'reset' });
          }
        }>
          LOGIN
        </Text>
      )
    }


  }

  render(){
    const { textStyle } = styles;


    return(
      <View style={styles.container}>
        <Text style={textStyle} onPress={this.sideMenuPress.bind(this)}>
          HOME
        </Text>
        <Text style={textStyle} onPress={this.sideMenuServer.bind(this)}>
          SERVER STATUS
        </Text>
        <Text style={textStyle} onPress={this.characterSearch.bind(this)}>
          CHARACTER SEARCH
        </Text>
        {this.renderCharacterList()}
        {this.renderLoginLogout()}
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 20
  },
  textStyle: {
    fontSize: 20
  }
}

mapStateToProps = ({ auth }) => {
  const { user } = auth
  return { user }
}

export default connect(mapStateToProps, {checkLoggedIn, LogoutUser})(SideMenu)
