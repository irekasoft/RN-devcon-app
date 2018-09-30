import React, { Component } from 'react'
import { View, Text,Dimensions,

TouchableOpacity,
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class Card extends Component {
  render() {
    return (
      <View style={{ width:WIDTH/2, height:143, justifyContent:'center', alignItems:'center'}}>          
        <View style={{ width:'80%', height:'60%',backgroundColor:'white',padding:5,borderRadius:13, backgroundColor:'skyblue'}}>
        </View>
        <TouchableOpacity>
        <Text style={{fontSize:20, color:'black'}}>{this.props.title}</Text>
        </TouchableOpacity>        
      </View>
    );
  }
}

export default Card;
