import React from 'react'; 
import { StyleSheet, View, Text, } from 'react-native'; 

const Config = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Configurações</Text>
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
        color:'#003366', 
        fontSize:40
    }
}); 

export default Config; 