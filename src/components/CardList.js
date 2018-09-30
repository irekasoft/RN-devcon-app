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
      <ScrollView>
      <View style={{width:WIDTH, backgroundColor:'skyblue', flexDirection:'row', flexWrap:'wrap'}}>

         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>        
         <Card title="Hllo"/>                

      </View> 
      </ScrollView>
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
