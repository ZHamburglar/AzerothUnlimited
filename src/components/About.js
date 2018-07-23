import React from 'react';
import {View} from 'react-native';

const About = () => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      This is the about page for this app.
    </View>
  )
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { About };
