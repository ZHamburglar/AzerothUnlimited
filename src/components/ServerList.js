import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ServerItem from './ServerItem';

class ServerList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.server);
  }

  renderRow(server) {
    return <ServerItem server={server} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { server: state.server.serverstatus[0].realms };
};

export default connect(mapStateToProps)(ServerList);
