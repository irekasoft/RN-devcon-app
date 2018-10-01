import React, { Component } from 'react'
import {
  View,
  Text,  
  Image,
} from 'react-native'

import {createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeMainScreen from './src/screens/HomeMainScreen'
import AboutMainScreen from './src/screens/AboutMainScreen'
import EventMainScreen from './src/screens/EventsMainScreen'
import ProfileMainScreen from './src/screens/ProfileMainScreen'
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import MembersMainScreen from './src/screens/MembersMainScreen'

import AppStyle from './src/styles/AppStyle'
import EventDetailScreen from './src/screens/EventDetailScreen'
import MemberDetailScreen from './src/screens/MemberDetailScreen'

const HomeStackNavigator = createStackNavigator({  
  Home:{
    screen: HomeMainScreen,    
  },
  HomeDetail:{
    screen: HomeDetailScreen
  },  
},{
  navigationOptions:{
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:AppStyle.headerBackgroundColor,
      borderBottomWidth:0,
    },    
    headerTitleStyle:{
      textAlign:'center',      
    }
  }
})

const EventsStackNavigator = createStackNavigator({
  EventsHome:{
    screen: EventMainScreen
  },
  EventDetail:{
    screen: EventDetailScreen
  }
},{
  navigationOptions:{
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:AppStyle.headerBackgroundColor,
      borderBottomWidth:0,
    },    
    headerTitleStyle:{
      textAlign:'center',      
    }
  }
})

const MembersStackNavigator = createStackNavigator({
  MembersHome:{
    screen: MembersMainScreen
  },
  MemberDetail:{
    screen: MemberDetailScreen
  }
},{
  navigationOptions:{
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:AppStyle.headerBackgroundColor,
      borderBottomWidth:0,
    },    
    headerTitleStyle:{
      textAlign:'center',      
    }
  }
})

const RootNavigator = createBottomTabNavigator({
  TabHome:{
    screen: HomeStackNavigator,    
  },
  TabEvents:{
    screen: EventsStackNavigator
  },
  TabMembers:{
    screen: MembersStackNavigator
  },
  TabAbout:{
    screen: AboutMainScreen
  },

},{
  initialRouteName: 'TabHome', // prod: TabHome
  navigationOptions: ({navigation}) => ({    
    tabBarOptions: {      
      activeTintColor:AppStyle.activeTintColor,
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
      } else if (routeName === 'TabMembers') {
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
      } else if (routeName === 'TabMembers') {
        titleString = "Members";
      }     
      return <Text style={{fontSize:10,color:tintColor, textAlign:'center'}}>{titleString}</Text>
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