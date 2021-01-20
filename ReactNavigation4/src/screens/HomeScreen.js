import React from 'react'; 
import { StyleSheet, View, Text } from 'react-native'; 

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Home screen</Text>
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
        fontSize:22
    }
}); 

export default HomeScreen; 