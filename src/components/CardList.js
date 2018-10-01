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
  Linking, 
  FlatList,
} from 'react-native'

import Card from './Card'

import faculties from '../data/faculties.json'

const WIDTH = Dimensions.get('window').width

class CardList extends Component {
  render() {
    return (
      
      <View style={{width:WIDTH, backgroundColor:'white', flexDirection:'row', flexWrap:'wrap'}}>


        <FlatList
          data={faculties}
          numColumns={2}
          renderItem={({item, index}) => 
            <Card 
              title={item.name} 
              onPress={()=>{this.props.navigation.navigate('HomeDetail',{id: item.id, faculty: item}) }} 
              onPressTelegram={()=>{ Linking.openURL(item.telegram_url); }} 
           />
          }
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
