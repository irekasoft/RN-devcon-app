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
         <Card title="Academia"/>        
         <Card title="Volunteers"/>        
         <Card title="Notice Board"/>        
         <Card title="Machine Learning"/>        
         <Card title="Data Science"/>        
         <Card title="React Native"/>        
         <Card title="IoT"/>        
         <Card title="UI / UX"/>               
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
