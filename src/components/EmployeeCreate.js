import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

// Import these from the index, in the actions folder
import { employeeUpdate, employeeCreate } from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';



class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    // This comes from the EmployeeActions.js action file.
    // If a shift is not provided then use Monday
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  // onChangeText={value -> this.props.employeeUpdate({ prop: 'phone', value})}

  render () {
    console.log("Employee props: ", this.props.employee)
    return (
      <Card>




        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}


const mapStateToProps = (state) => {
  // The employeeForm state comes from the employeeForm: EmployeeFormReducer in the combineReducers call
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift};
}

// The {employeeUpdate} comes from the EmployeeActions.js in the actions folder
export default connect(mapStateToProps, { employeeUpdate, employeeCreate})(EmployeeCreate);
