import React, { Component } from 'react'
import {
  View,
  Text,  
  Image,
} from 'react-native'

import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeMainScreen from './src/screens/HomeMainScreen'
import AboutMainScreen from './src/screens/AboutMainScreen';
import EventMainScreen from './src/screens/EventsMainScreen';
import ChatMainScreen from './src/screens/ChatMainScreen';
import ProfileMainScreen from './src/screens/ProfileMainScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';

const HomeStackNavigator = createStackNavigator({  
  Home:{
    screen: HomeMainScreen,
    
  },
  HomeDetail:{
    screen: HomeDetailScreen
  }
  
},{
  navigationOptions:{
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'#1D1D1D',
      borderBottomWidth:0,
    },
    
  }
})

const RootNavigator = createBottomTabNavigator({
  TabHome:{
    screen: HomeStackNavigator,    
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
},{
  initialRouteName: 'TabHome', // prod: TabHome
  navigationOptions: ({navigation}) => ({    
    tabBarOptions: {      
      activeTintColor:'#E559A1',
      style: {
        borderTopWidth: 0
      },
    },
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'TabHome') {
        iconName = require('./src/img/ico_home.png');
      } else if (routeName === 'TabAbout') {
        iconName = require('./src/img/ico_about.png');
      } else if (routeName === 'TabEvents') {
        iconName = require('./src/img/ico_events.png');
      } else if (routeName === 'TabChat') {
        iconName = require('./src/img/ico_chat.png');
      } else if (routeName === 'TabProfile') {
        iconName = require('./src/img/ico_profile.png');
      }               
      return <Image source={iconName} style={{tintColor:tintColor}} />;
    },
    tabBarLabel: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let titleString;
      if (routeName === 'TabHome') {
        titleString = "Home";
      } else if (routeName === 'TabAbout') {
        titleString = "About";
      } else if (routeName === 'TabEvents') {
        titleString = "Events";
      } else if (routeName === 'TabChat') {
        titleString = "Chat";
      } else if (routeName === 'TabProfile') {
        titleString = "Profile";
      }     
      return <Text style={{fontSize:10,color:tintColor}}>{titleString}</Text>
    },
    tabBarVisible: tabBarVisible(navigation),
    
  })
})

const tabBarVisible = (navigation) => {

  const { routes } = navigation.state;
  
  let showTabbar = true;

  console.log('tabbarvisible');
  console.log(navigation);

  if ( routes !== undefined ){
    routes.forEach((route) => {
      if (route.routeName === 'HomeDetail') {
        showTabbar = false;
      } 
    });
  }  

  return showTabbar;  
};

class App extends Component {
  render(){
    return (      
      <RootNavigator/>
    )
  }
}

export default App;