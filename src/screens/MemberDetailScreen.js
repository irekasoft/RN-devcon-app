import React, { Component } from 'react'
import { 
  View, 
  Text,  
  Image,
  Dimensions
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class MemberDetailScreen extends Component {

  static navigationOptions = {
    title: 'Member Detail',
  }

  render() {
    return (
      <View style={styles.container}>        
         <View style={styles.itemContainer}>
           <View style={styles.cell}>
             <View style={{flexDirection:'row'}}>
               <Image source={{uri:this.props.navigation.state.params.item.profile_pic_url}} style={{width:65, height:65, borderRadius:32.5, overflow:'hidden', resizeMode:'cover', padding:0}} />
               <View style={{flex: 3,paddingHorizontal:12,paddingVertical:0}}>
                 <Text style={{fontWeight:'600'}}>{this.props.navigation.state.params.item.name}</Text>
                 <Text style={{ }}>Learn a lot of stuff in one day. From algebra to computer vision.</Text>
                 <View style={{height:13}}/>
                 <Text style={{fontSize:11, color:'gray'}}>aa</Text>
                 <Text style={{fontSize:11, color:'gray'}}>aa</Text>
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
  },
  cell:{
    padding:10,
    backgroundColor:'#E9E9E9',
    marginHorizontal: 8,
    marginTop: 8,
  }
};

export default MemberDetailScreen;
