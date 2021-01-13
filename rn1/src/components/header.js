import React from 'react'; 
import { 
    StyleSheet,
    View, 
    Text
 } from 'react-native'; 

 export default (props) => {

    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.content}</Text>
        </View>
    ); 
 }; 


 const styles = StyleSheet.create({
     header:{
         height:60, 
         width:'100%', 
         backgroundColor:'#ccc', 
         justifyContent:'center', 
         alignItems:'center'
     }, 
     headerText:{
        fontSize:20, 
        fontWeight:'bold', 
        color:'#003366'
     }
 })