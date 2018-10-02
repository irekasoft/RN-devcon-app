import React, { Component } from 'react'
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  RefreshControl,
} from 'react-native'

import events from '../data/events.json'
import events_past from '../data/events_past.json'
import events_upcoming from '../data/events_upcoming.json'

import AppStyle from '../styles/AppStyle'

import SegmentedControlTab from 'react-native-segmented-control-tab'

class EventMainScreen extends Component {

  static navigationOptions = {
    title: 'Events',
  }

  state = {
    event_segment_index: 0, // or "past"
    refreshing: false
  }

  handleIndexChange = (index) => {
    this.setState({
      event_segment_index: index,
    });
  }

  render() {

    let events = []

    if (this.state.event_segment_index === 0){
      events = events_upcoming;
    }else if (this.state.event_segment_index === 1) {
      events = events_past;
    }

    return (
      <View style={styles.container}>
        <View style={{height:44, backgroundColor:'#362743', padding:8}}>
          <SegmentedControlTab
            values={['Upcoming', 'Past']}
            selectedIndex={this.state.event_segment_index}
            onTabPress={this.handleIndexChange}
            badges = {[1,0]}
            tabStyle = {{borderColor:'#8A24E5',backgroundColor: 'transparent'}}
            activeTabStyle = {{backgroundColor:'#8A24E5'}}
            tabTextStyle= {{ color: '#CB91FF' }}
            />
        </View>
        <FlatList
          refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={ ()=>{ this.refreshData() } }
              />
            }
          data = {events}
          renderItem = {({item, index})=>this.renderItem(item,index)}
        />     
      </View>
    );    

  }

  refreshData () {

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
