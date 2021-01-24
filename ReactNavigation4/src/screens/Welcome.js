import React, { useState, useEffect } from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'; 


const Welcome = ( props ) => {

    return(
        <View style={styles.container}>

            <Text style={styles.txt}>Welcome</Text>
            
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }, 
    txt:{
        fontSize:22,
        marginBottom:10
    }, 
    input:{
        borderWidth:1, 
        width:300, 
        marginBottom:35,
        borderRadius:5, 
        paddingLeft:25,
        fontSize:15
    }, 
    img:{
        width:30, 
        height:30, 
    }
}); 

Welcome.navigationOptions = ({navigation}) => { 
    return { 
        title:'Welcome'
    }
}; 

export default Welcome; 