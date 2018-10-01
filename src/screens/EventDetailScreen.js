import React, { Component } from 'react'
import { 
  View, 
  Text,
  Image,
  Dimensions,
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class EventDetailScreen extends Component {
  static navigationOptions = {
    title: 'Event Detail',
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:WIDTH, height:180, backgroundColor:'white',marginTop:0, position: 'absolute'}}>
          <Image style={{width:'100%',height:'100%'}} source={{uri:'http://www.ihrnet.com/wp-content/uploads/2017/04/events.jpg'}}/>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.cell}>
            <View style={{flexDirection:'row'}}>
              <Image source={{uri:'http://www.ihrnet.com/wp-content/uploads/2017/04/events.jpg'}} style={{width:65, height:65, borderRadius:32.5, overflow:'hidden', resizeMode:'cover', padding:0}} />
              <View style={{flex: 3,paddingHorizontal:12,paddingVertical:0,}}>
                <Text style={{fontWeight:'600'}}>Event Name 0</Text>
                <Text style={{ }}>Learn a lot of stuff in one day. From algebra to computer vision.</Text>
                <View style={{height:13}}/>
                <Text style={{fontSize:11, color:'gray'}}>28 September 2018</Text>
                <Text style={{fontSize:11, color:'gray'}}>10:00 AM ~ 10:10 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.cell}>
            <Text>This is a sample text. Make sure you register for the coming Devcon!</Text>
          </View>
        </View>  
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor:'#F7F7F7',
  },
  itemContainer: {
    marginTop: 120,
  },
  cell:{
    padding:10,
    backgroundColor:'#E9E9E9',
    marginHorizontal: 8,
    marginTop: 8,
  }
};

export default EventDetailScreen;
