import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AboutMainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutMainScreen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default AboutMainScreen;
