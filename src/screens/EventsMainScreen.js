import React, { Component } from 'react'
import { View, Text } from 'react-native'

class EventMainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EventMainScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop:44,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default EventMainScreen;
