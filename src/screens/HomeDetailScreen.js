import React, { Component } from 'react'
import { 

  View, 
  Text,
  Dimensions,
  Image, 
  Linking

} from 'react-native'

const WIDTH = Dimensions.get('window').width;

class HomeDetailScreen extends Component {

  // ${navigation.state.params.id}
  static navigationOptions = ({navigation}) => ({
    title: ``,
  });

  render() {
    return (
      <View style={styles.container}>
        
        <Image 
          style={{width:WIDTH, height:255}}
          source={require('../img/img_react_native_cover.png')}
        />

        <View style={{padding:12}}>
          <Text style={{fontSize:18, fontWeight:'900', marginBottom:20}} >
            {this.props.navigation.state.params.faculty.name}
          </Text>
          <Text style={{fontSize:13, lineHeight:30}}>
          Make use code snippet feature in VS Code make your life bit more easier when creating a new component or screen with React Native.
  Just type rns an viola everything is ready.
  What you have to do is open VS Code > Preference > User Snippets and add this new one.
          </Text>          
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,

  },
};

export default HomeDetailScreen;
