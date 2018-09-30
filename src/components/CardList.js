import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Card from './Card';

const WIDTH = Dimensions.get('window').width

class CardList extends Component {
  render() {
    return (
      
      <View style={{width:WIDTH, backgroundColor:'white', flexDirection:'row', flexWrap:'wrap'}}>
         <Card title="Academia" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="Volunteers" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="Notice Board" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="Machine Learning" />        
         <Card title="Data Science" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="React Native" img={require('../img/react_native.jpg')} onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="IoT" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />        
         <Card title="UI / UX" onPress={()=>{this.props.navigation.navigate('HomeDetail') }} />               
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

export default CardList;
