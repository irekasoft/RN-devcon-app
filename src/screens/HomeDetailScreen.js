import React, { Component } from 'react'
import { 
  View, 
  Text,
  Dimensions,
  Image, 
  Linking,
  ScrollView,
  TouchableOpacity,

} from 'react-native'

const WIDTH = Dimensions.get('window').width;

class HomeDetailScreen extends Component {

  // ${navigation.state.params.id}
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.faculty.name}`,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Image 
          style={{width:WIDTH, height:255}}
          source={require('../img/img_react_native_cover.png')}
        />

        <View style={{marginTop:-52, height:52, backgroundColor:'rgba(0,0,0,0.5)'}}>
          <Text style={{fontSize:18, fontWeight:'900', marginBottom:20, color:'white', margin:14}} >
            {this.props.navigation.state.params.faculty.name}
          </Text>
        </View>

        <View style={{padding:12}}>
          <Text style={{fontSize:13, lineHeight:30}}>
          {this.props.navigation.state.params.faculty.description}
          
          </Text>          
        </View>

        <View style={{ flex:1, flexDirection:'row', justifyContent:'center' }}>
          <TouchableOpacity onPress={()=>{ Linking.openURL(this.props.navigation.state.params.faculty.telegram_url) }}> 
            <Image source={require('../img/ico_telegram_group.png')}/>
          </TouchableOpacity>

        </View>


      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,

  },
};

export default HomeDetailScreen;
