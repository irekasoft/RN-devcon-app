import React, { Component } from 'react'
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions
} from 'react-native'

import { MapView  } from 'expo';
const SCREEN_WIDTH = Dimensions.get('window').width;
const HeaderText = (props) => {
  return (
    <Text style={{fontSize:30, fontWeight:'700', textAlign:'center', paddingTop:20, paddingBottom:5}} >{props.text}</Text>
  )
}

const PillText = (props) => {
  return (
    <View style={{borderRadius:33,height:30,backgroundColor:props.color, justifyContent:'center', alignItems:'center', margin:4}}>
      <Text style={{color:'white',fontSize:13, paddingHorizontal:18, paddingVertical:8}}>{props.title}</Text>
    </View>
  )
}

const PillButton = (props) => {
  return (
    <TouchableOpacity onPress={()=>{Linking.openURL(props.url);}}>
      <View style={{borderRadius:33,height:30,backgroundColor:'rgba(0,0,0,0)', justifyContent:'center', alignItems:'center', margin:4,borderColor:'black',borderWidth:1, alignSelf:'center'}} >
        <Text style={{color:'black',fontSize:13, paddingHorizontal:18, paddingVertical:6}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const PillButton2 = (props) => {
  return (
    <TouchableOpacity style={{padding:4}}>
      <View style={{borderRadius:33,height:30,backgroundColor:'rgba(0,0,0,0)', justifyContent:'center', alignItems:'center',borderColor:'black',borderWidth:1, alignSelf:'center',width:SCREEN_WIDTH/2-8 }} >
        <Text style={{color:'black',fontSize:13, paddingHorizontal:18, paddingVertical:6}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

class AboutMainScreen extends Component {

  static navigationOptions = {
    title: 'About',
  }

  componentDidMount(){      
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <View style={{backgroundColor:'black'}}>
          <Image style={{alignSelf:'center'}} source={require('../img/img_devcon_logo.png')} />
        </View>

        <HeaderText text="By a community for the community"/>

        <Text style={styles.bodyText}>We are an open community consists of tech experts and people with big hearts to help and spread on technology knowledge to the public with no fee at all. Currently, we deliver the following areas:</Text>

        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center' }}>

        <PillText title="Artificial Inteligence" color="#0DB6AB"/>
        <PillText title="Machine Learning" color="#EA6F9D"/>
        <PillText title="Data Science" color="#1BA75B"/>
        <PillText title="Mobile App" color="#892FFB"/>
        <PillText title="IoT" color="#FB2FF2"/>
        <PillText title="Web" color="#2FA5FB"/>

        </View>

        <HeaderText text="Visit our Website"/>

        <PillButton title="www.devcon.my" url="https://www.devcon.my"/>

        <HeaderText text="Come Chill with Us"/>
        <Text style={styles.bodyText}>We are based in Magic, Cyberjaya where we can hang out here and have some coffee and code.</Text>

        {/* MAPS */}
        {/* refer to: https://github.com/react-community/react-native-maps */}
        <MapView
          style={{ width:SCREEN_WIDTH, height: 200 }}
          initialRegion={{
            latitude: 2.9093279,
            longitude: 101.6547717,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation = {true}
          scrollEnabled = {false}
          ref="maps"
          onRegionChangeComplete={() => this.refs.marker1.showCallout() }
        >
          <MapView.Marker
            coordinate= {{latitude:2.9093279,longitude:101.6547717}}
            title={"We are here"}
            description={"Where the Magic happens."}            
            ref="marker1"
          />
        </MapView>

        <View style={{height:12}}/>

        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
          <PillButton2 title="Navigate" url=""/>
          <PillButton2 title="Show In Maps" url=""/>
          <PillButton2 title="Hail a Grab" url=""/>
          <PillButton2 title="Chill out Here" url=""/>                
        </View>

        <View style={{height:40}}/>

      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  bodyText:{padding:12,fontSize:17,lineHeight:26}
};

export default AboutMainScreen;
