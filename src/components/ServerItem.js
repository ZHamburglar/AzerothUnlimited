import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ServerItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDescription() {
    const { server, expanded } = this.props;
    if (expanded){
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            servertype: {server.type}
            battlegroup: {server.battlegroup}
            population: {server.population}
          </Text>
          <Text>

          </Text>

        </CardSection>
      )
    };
  };

  render() {
    const { titleStyle } = styles;
    const { id, title, name, type, slug, population, status } = this.props.server;
    console.log('Hello: ', this.props.server.name," ", this.props.server.type, " ", this.props.server.slug," ",this.props.server.id," ", this.props.server)
    if (population == "full"){
      console.log("Good news", status)
    }


    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectServer(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>
            {name} {id}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedServerId === ownProps.server.id
  return { expanded };
};

export default connect(mapStateToProps, actions)(ServerItem);
