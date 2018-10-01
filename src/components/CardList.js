import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native'

import Card from './Card';

const WIDTH = Dimensions.get('window').width

class CardList extends Component {
  render() {
    return (
      
      <View style={{width:WIDTH, backgroundColor:'white', flexDirection:'row', flexWrap:'wrap'}}>
         <Card 
          title="Academia" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 0}) }} 
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }} />        
         <Card title="Volunteers" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 1}) }}
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }}  />        
         <Card title="Notice Board" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 2}) }}
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }}  />        
         <Card title="Machine Learning" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 3}) }}
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }}  />        
         <Card title="Data Science" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 4}) }} 
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }} 
          />        
         <Card title="React Native" 
          img={require('../img/react_native.jpg')} 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 5}) }} 
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }} 
          />        
         <Card title="IoT" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 6}) }} 
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }} 
          />        
         <Card title="UI / UX" 
          onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: 7}) }} 
          onPressTelegram={()=>{ Linking.openURL('http://link.devcon.my/telegram-academia'); }} 
          />             
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
