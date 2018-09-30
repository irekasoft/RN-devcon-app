import React, { Component } from 'react'
import {
  View,
  Text,  
} from 'react-native'

import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import MainHomeScreen from './src/screens/MainHomeScreen'
import AboutMainScreen from './src/screens/AboutMainScreen';
import EventMainScreen from './src/screens/EventsMainScreen';
import ChatMainScreen from './src/screens/ChatMainScreen';
import ProfileMainScreen from './src/screens/ProfileMainScreen';

const HomeStackNavigator = createStackNavigator({  
  Home:{
    screen: MainHomeScreen
  },
})


const RootNavigator = createBottomTabNavigator({
  TabHome:{
    screen: HomeStackNavigator
  },
  TabAbout:{
    screen: AboutMainScreen
  },
  TabEvents:{
    screen: EventMainScreen
  },
  TabChat: {
    screen: ChatMainScreen
  },
  TabProfile:{
    screen: ProfileMainScreen
  }

})

class App extends Component {
  render(){
    return (      
      <RootNavigator/>
    )
  }
}

export default App;