import React, { Component } from 'react'
import { 
  View,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native'

const WIDTH = Dimensions.get('window').width

import CardList from '../components/CardList'
import { ScrollView } from 'react-native-gesture-handler';

class HomeMainScreen extends Component {

  static navigationOptions = {
    title: 'DevCon',
  }

  render(){
    return (      
      <SafeAreaView style={styles.container}>     
        <StatusBar barStyle="light-content"/>          
        <ScrollView>

          {/* Header Cover */}
          <View style={{width:WIDTH, height:152, backgroundColor:'white',marginTop:0}}>
            <Image style={{width:'100%',height:'100%'}} source={require('../img/img_header.png')}/>
          </View>     

          {/* Header Text */}
          <View style={{padding: 20}}>
            <Text style={{fontSize:15,textAlign:'center'}}>
            We educate people for free. We build community. We are powered by Volunteers. Our success is measured by how many lives that we are able to improve.
            </Text>
          </View>

          {/* List of Groups  */}        
          <CardList {...this.props} />

        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = {
  container: {
    // paddingTop:StatusBar.currentHeight,   
    backgroundColor:'#ffffff',
    flex:1,
  }
}

export default HomeMainScreen;