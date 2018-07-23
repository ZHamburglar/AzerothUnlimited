import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import { characterListAdd } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class CharacterDisplay extends Component {

  onButtonPress() {
    const { name, server, character } = this.props
    console.log("Character: ", this.props.character.data)
    const charDat = this.props.character.data.characters[0]
    const thumbnail  = charDat.thumbnail;
    const level  = charDat.level;
    const iLvl = charDat.items.averageItemLevel
    const honKills = charDat.totalHonorableKills
    // const { name, server } = this.props;
    // This comes from the EmployeeActions.js action file.
    // If a shift is not provided then use Monday
    // this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    console.log("adding to list", {name}, {server}, {thumbnail: thumbnail}, {level: level}, {iLvl: iLvl}, {HonorableKills: honKills})
    this.props.characterListAdd({
      name,
      server,
      thumbnail: thumbnail,
      level: level,
      iLvl: iLvl,
      HonorableKills: honKills
    });
  };

  renderSaveButton() {
    console.log("Character info!: ", this.props.characterinfo)
    if (this.props.user) {
      return (
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save to my Characters
          </Button>
        </CardSection>
      )
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text> {this.props.character.data.characters[0].name}</Text>
        </CardSection>
        <CardSection>
          <Text> Class: {this.props.character.data.characters[0].class}</Text>
        </CardSection>
        <CardSection>
          <Text> Level: {this.props.character.data.characters[0].level}</Text>
        </CardSection>
        <CardSection>
          <Text> Realm: {this.props.character.data.characters[0].realm}</Text>
        </CardSection>
        {this.renderSaveButton()}
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}


const mapStateToProps = (state) => {
  const { character, name, server } = state.characterSearch
  const { user } = state.auth
  return { character, name, server, user }
}


export default connect(mapStateToProps, {characterListAdd})(CharacterDisplay);
