import React, { Component } from 'react'
import { 
  View, 
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'

import AppStyle from '../styles/AppStyle'

const WIDTH = Dimensions.get('window').width

const icons = [
  require("../img/devcon_group_icons/academia.png"),
  require("../img/devcon_group_icons/volunteers.png"),
  require("../img/devcon_group_icons/noticeboard.png"),
  require("../img/devcon_group_icons/ml.png"),
  require("../img/devcon_group_icons/datascience.png"),
  require("../img/devcon_group_icons/reactnative.png"),
  require("../img/devcon_group_icons/iot.png"),
  require("../img/devcon_group_icons/uiux.png"),
  require("../img/devcon_group_icons/webdevelopment.png"),
  require("../img/devcon_group_icons/java.png"),
  require("../img/devcon_group_icons/android.png"),
  require("../img/devcon_group_icons/ios.png"),
  require("../img/devcon_group_icons/blockchain.png"),
  require("../img/devcon_group_icons/arduino.png"),
  require("../img/devcon_group_icons/architecture.png"),
  require("../img/devcon_group_icons/academia.png"),
  require("../img/devcon_group_icons/academia.png"),
]

class Card extends Component {

  render() {

    return (
      <View style={{ width:WIDTH/3, height:121, justifyContent:'center', alignItems:'center',marginBottom:10}}>      

        <View style={{ width:'95%', height:94,backgroundColor:'white',borderRadius:13, overflow:'hidden', justifyContent:'center',alignItems:'center'}}>   

          <TouchableOpacity onPress={this.props.onPress} >            
            <Image source={ icons[this.props.index] } style={{width:80,height:80, borderRadius:40}} />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={this.props.onPressTelegram} style={{position:'absolute',right:3,top:3}} >
            <Image source={require('../img/ico_telegram.png')} />
          </TouchableOpacity> */}

        </View> 

        <TouchableOpacity onPress={this.props.onPress} >
          <Text style={{fontSize:14, color:'black', margin:5, fontWeight:'600', textAlign:'center'}}>{this.props.item.name}</Text>
        </TouchableOpacity>        
      </View>
    );
  }
}

export default Card;
