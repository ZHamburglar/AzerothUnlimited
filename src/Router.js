import React, {Component} from 'react';
import { Navigator, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import LoginForm from './components/LoginForm';
import ServerList from './components/ServerList';
import Drooooopdown from './components/MenuDropdown';
import HomePage from './components/HomePage';
import SearchCharacter from './components/SearchCharacter';
import CharacterDisplay from './components/CharacterDisplay';
import CharacterList from './components/CharacterList';


import DrawerComponent from './components/Drawer';


export default class RouterComponent extends Component {
  state = {
    iconImage: "Azeroth Unlimited"
  }


  navBarOpenImage = () => {
    return (
      <Image source={require('./images/hamburgermenu.png')} style={{width: 30, height: 30}} />
    )
  }

  navBarButton = () => {
    return(
      <TouchableOpacity onPress={() => Actions.refresh({ key: 'drawer', open: true })}>
        {this.navBarOpenImage()}
      </TouchableOpacity>
    )
  }

render(){
  const backgroundImage = {
    uri: './images/headerbackground.png',
    height: 40,
    width: 200
  }
  return (
      <Router
        sceneStyle={{ paddingBottom: 0 }}
        navigationBarBackgroundImage={{
                    uri: './images/headerbackground.png',
                    width: Dimensions.get('window').width,
                    height: 64,
                }}
        renderLeftButton={this.navBarButton}
        title={this.state.iconImage}>

        <Scene key="drawer" component={DrawerComponent} open={false} sceneStyle={{ paddingTop: 10, paddingBottom: 30 }} >
          <Scene key="main" initial>
            <Scene sceneStyle={{ paddingTop: 50 }} key="homepage" component={HomePage} />
            <Scene sceneStyle={{ paddingTop: 65 }} key="droppage" component={Drooooopdown} />
            <Scene sceneStyle={{ paddingTop: 65 }} key="serverList" component={ServerList} />
            <Scene sceneStyle={{ paddingTop: 65 }} key="searchCharacter" component={SearchCharacter} />
            <Scene sceneStyle={{ paddingTop: 65 }} key="displayCharacter" component={CharacterDisplay} />
            <Scene sceneStyle={{ paddingTop: 65 }} key="characterList" component={CharacterList} title="Character List"/>
            <Scene key="auth" sceneStyle={{ paddingTop: 65 }} component={LoginForm} />
          </Scene>
        </Scene>
      </Router>

  );
};
}
