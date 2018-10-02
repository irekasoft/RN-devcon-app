import React, { Component } from 'react'
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  
} from 'react-native'

import members from '../data/members.json'

class MembersMainScreen extends Component {

  static navigationOptions = {
    title: 'Members',
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {members}
          renderItem = {({item, index})=>this.renderItem(item,index)}
        />    
      </View>
    );
  }

  renderItem(item, index){
    return (
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('MemberDetail',{ item:item })} } >
      <View style={styles.cell}>
        <View style={{flexDirection:'row'}}>
          <Image source={{uri:item.profile_pic_url}} style={{width:65, height:65, borderRadius:32.5, overflow:'hidden', resizeMode:'cover'}} />
          <View style={{flex: 3,paddingHorizontal:12,paddingVertical:6,}}>
            <Text style={{fontWeight:'600'}}>{item.name}</Text>
            <Text>{item.description}</Text>                       
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
    backgroundColor:'white'
  },
  cell:{
    padding:10,
    backgroundColor:'#E9E9E9',
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 5,
  }
};

export default MembersMainScreen;
