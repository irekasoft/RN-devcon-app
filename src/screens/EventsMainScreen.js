import React, { Component } from 'react'
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'

import events from '../data/events.json'
import AppStyle from '../styles/AppStyle';

class EventMainScreen extends Component {

  static navigationOptions = {
    title: 'Events',
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {events}
          renderItem = {({item, index})=>this.renderItem(item,index)}
        />     
      </View>
    );
  }

  renderItem(item, index){
    return (
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('EventDetail', {item:item})} } >
      <View style={styles.cell}>
        <View style={{flexDirection:'row'}}>
          <Image source={{uri:'http://www.ihrnet.com/wp-content/uploads/2017/04/events.jpg'}} style={{width:65, height:65, borderRadius:32.5, overflow:'hidden', resizeMode:'cover', padding:0}} />
          <View style={{flex: 3,paddingHorizontal:12,paddingVertical:0,}}>
            <Text style={{fontWeight:'600'}}>{item.name}</Text>
            <Text style={{ }}>{item.description}</Text>
            <View style={{height:13}}/>
            <Text style={{fontSize:11, color:'gray'}}>{item.date_string}</Text>
            <Text style={{fontSize:11, color:'gray'}}>{item.time_start_end}</Text>
          </View>
        </View>      
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  cell:{
    padding:10,
    backgroundColor:'#E9E9E9',
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 5,
  }
};

export default EventMainScreen;
