import React, { Component } from 'react';
import { Text, ListView, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import ListCharacters from './ListCharacters';
import { characterListFetch } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class CharacterList extends Component {
  componentWillMount(){
    //When the screen is originally loaded
    this.props.characterListFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    // nextprops are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    // When the page is rerendered it will run it using next props
    this.createDataSource(nextProps)
  }

  createDataSource({ characterList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(characterList);
  }

  renderRow(characterList) {
    return <ListCharacters characterList={characterList} />
  }

  render () {
    console.log("Character List: ", this.props)
    return (
      <View>
        <Card>
          <CardSection>
            <Text>Character List</Text>
          </CardSection>
        </Card>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    )
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const characterList = _.map(state.characterList, (val, uid) => {
    return {...val, uid}
  });
  return {characterList}
}


export default connect(mapStateToProps, {characterListFetch})(CharacterList);
