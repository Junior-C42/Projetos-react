import React from 'react'; 
import { View, StyleSheet, Text, } from 'react-native'; 

const ItemDay = ( props ) => {

    console.log(props)

    return(
        <View style={styles.container}>
            <Text style={{fontSize:22, color:'#fff'}} >Escala</Text>
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#003366'
    }
})

export default ItemDay; 