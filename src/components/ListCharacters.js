import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListCharacters extends Component {
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut()
  }

  onRowPress() {
    console.log("I was pressed");
  }

  renderDescription() {
  const { characterList, expanded } = this.props;
  if (expanded){
      return (
        <CardSection style={styles.charCardStyle}>
          <View style={{flexDirection: 'row', flex: 1, height: 100}}>
            <Text style={styles.sectionStyleName}>
              {characterList.name}
            </Text>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: `https://render-us.worldofwarcraft.com/character/${characterList.thumbnail}`}}
            />
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={styles.sectionStyle1}>
              {characterList.server}
            </Text>
            <Text style={styles.sectionStyle1}>
              Level: {characterList.level}
            </Text>
          </View>


        </CardSection>
      )
    };
  };

  render() {
    const { name, server, thumbnail } = this.props.characterList;
    const { charTitleStyle, serverTitleStyle} = styles
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectCharacter(name)}>
        <View>
          <CardSection style={{ justifyContent: 'space-between', flex: 1}}>
            <Text style={charTitleStyle}>
              {name}
            </Text>
            <Text style={serverTitleStyle}>
              {server}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  charTitleStyle: {
    fontSize: 18,
    paddingLeft: 15,

  },
  serverTitleStyle: {
    fontSize: 18
  },
  charCardStyle: {
    backgroundColor: '#211510',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#504137',
    flexDirection: 'column',
    height: 400
  },
  sectionStyle1: {
    color: '#ebdec2',
    flex: 2
  },
  sectionStyleName: {
    color: '#ebdec2',
    flex: 2,
    fontSize: 30
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.characterSelect === ownProps.characterList.name
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListCharacters);
