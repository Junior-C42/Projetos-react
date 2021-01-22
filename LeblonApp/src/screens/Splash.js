// import-area:
import React from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'; 

// render-area:
const SplashScreen = ( props ) => {
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#003366' />
      <TouchableOpacity
        onPress={(e)=>{props.navigation.navigate('Welcome')}}
        activeOpacity={0}
      >
        <Image source={require('../images/logo1.png')} />
      </TouchableOpacity>
    </View>
  ); 
}; 

// styled-area:
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#003366', 
    justifyContent:'center', 
    alignItems:'center'
  }, 
})

// navigator-are:
SplashScreen.navigationOptions = ({navigation}) => {
    return {
       
    }
}; 


export default SplashScreen; 