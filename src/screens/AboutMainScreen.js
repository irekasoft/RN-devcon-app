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

class AboutMainScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Image style={{alignSelf:'center'}} source={require('../img/img_devcon_logo.png')} />

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

        <TouchableOpacity onPress={()=>{Linking.openURL('https://www.devcon.my');}}>
        <View style={{borderRadius:33,height:30,backgroundColor:'gba(0,0,0,0)', justifyContent:'center', alignItems:'center', margin:4,borderColor:'black',borderWidth:1, width:300, alignSelf:'center'}} >
          <Text style={{color:'black',fontSize:13, paddingHorizontal:18, paddingVertical:8}}>www.devcon.my</Text>
        </View>
        </TouchableOpacity>

        <HeaderText text="Come Chill with Us"/>
        <Text style={styles.bodyText}>We are based in Magic, Cyberjaya where we can hang out here and have some coffee and code.</Text>

        <MapView
          style={{ width:SCREEN_WIDTH, height: 200 }}
          initialRegion={{
            latitude: 2.9093279,
            longitude: 101.6547717,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,

          }}
          showsUserLocation={ true }
        >
          <MapView.Marker
            coordinate= {{latitude:2.9093279,longitude:101.6547717}}
            title={"We are here"}
            description={"Where the Magic happens."}
          />
        </MapView>

      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop:44,
  },
  bodyText:{padding:12,fontSize:17,lineHeight:26}
};

export default AboutMainScreen;
