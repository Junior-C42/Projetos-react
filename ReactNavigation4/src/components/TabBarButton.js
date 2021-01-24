import React from 'react'; 
import { TouchableOpacity, StyleSheet, Text, View  } from 'react-native'; 

const TabBarButton = (props) => {
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={props.onPress}
        >
            <View style={styles.ball}></View>
        </TouchableOpacity>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    txt:{
        color:'#fff'
    }, 
    ball:{
        width:50, 
        height:50, 
        borderRadius:50,
        backgroundColor:'#003366', 
        marginTop:-55
    }
}); 

export default TabBarButton; 