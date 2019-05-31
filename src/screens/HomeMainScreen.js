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
    navigationOptions: {
      header: null,
    }
  }

  render(){
    return (      
      <SafeAreaView style={styles.container}>     
        <StatusBar barStyle="light-content"/>          
        <ScrollView>

          {/* Header Cover */}
          <View style={{width:WIDTH, backgroundColor:'white',marginTop:0, padding:0}}>

            <View style={{height:20}}></View>

            <Image style={{position:'absolute',width:'100%',height:'100%'}} source={require('../img/people.jpg')}/>

            <Image style={{marginLeft:(WIDTH-110)/2}} source={require('../img/devcon_circle.png')}/>

            <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
            
            <Text style={{fontSize:15,textAlign:'center',color:'white',padding:20}}>
            We educate people for free. We build community. We are powered by Volunteers. Our success is measured by how many lives that we are able to improve.
            </Text>
            
            </View>
            
          </View>     

          
          {/* List of Groups  */}        
          <View style={{padding:10, marginBottom:8}}>
            <Text style={{fontSize:29, fontWeight:'700', color:'#3F3F3F'}}>Faculties</Text>
          </View>
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