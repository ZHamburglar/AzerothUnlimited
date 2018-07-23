import React, {Component} from 'react';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import ListItem from './ListItem'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount(){
    //When the screen is originally loaded
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    // nextprops are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    // When the page is rerendered it will run it using next props
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render () {
    console.log(this.props)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid} // { shift: monday, name: 'steve', id: '3n4ifsdSDSDs'}
  });

  return {employees}
};

export default connect(mapStateToProps, { employeesFetch})(EmployeeList)
