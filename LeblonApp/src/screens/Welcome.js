import React from 'react'; 
import { View, Text, StatusBar, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'; 

const Welcome = ( props ) => {
    return(
       <SafeAreaView style={styles.container}>
           <StatusBar barStyle={'light-content'} />
           <View style={styles.logoArea}>
                <Image source={require('../images/logo2.png')} />
           </View>

           <View style={styles.contentArea}>
               <Image style={{marginBottom:50}} source={require('../images/welcomeImg.png')} />
           </View>

           <View style={styles.bottomArea}>

                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={(e)=>{props.navigation.navigate('Login')}}
                >
                    <Text style={styles.loginText}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginButton2}
                    onPress={(e)=>{props.navigation.navigate('Splash')}}
                >
                    <Text style={styles.loginText2}>Get Started</Text>

                </TouchableOpacity>
           </View>

       </SafeAreaView>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#E8E8E8',
        flexDirection:'column',
    },
    logoArea:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:25
    },
    contentArea:{
        flex:3, 
        justifyContent:'center', 
        alignItems:'center'
    },
    bottomArea:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        flex:1, 
        marginLeft:10,
        marginRight:10,
        borderTopLeftRadius:25, 
        borderTopRightRadius:25
    },
    loginButton:{
        justifyContent:'center', 
        alignItems:'center',
        width:345,
        height:40,
        borderRadius:50,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.8,
        // shadowRadius:2, 
        elevation:7
    }, 
    loginButton2:{
        justifyContent:'center', 
        alignItems:'center',
        width:345,
        height:40,
        borderRadius:50,
        backgroundColor:'#003366',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.8,
        // shadowRadius:2, 
        elevation:7
    }, 
    loginText:{
        color:'#003366', 
        fontWeight:'bold', 
        fontSize:18
    },
    loginText2:{
        color:'#fff', 
        fontWeight:'bold', 
        fontSize:18
    }
}); 


Welcome.navigationOptions = ({navigate}) => { 
    return {
        headerStyle:{
            backgroundColor:'#fff'
        }, 
        tabBarLabel:'Home'
    }
}


export default Welcome; 