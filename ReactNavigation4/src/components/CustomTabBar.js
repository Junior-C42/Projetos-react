import React, { useEffect } from 'react'; 
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'; 

const CustomTabBar = (props) => {
    
    return(
        <View style={styles.container} >
            {
            props.items.map((item, index)=>{
                return (
                    <TouchableOpacity  
                        key={index}
                        style={styles.button}
                        onPress={()=>props.navigation.navigate(item.route)}
                    >
                        <Text style={styles.buttonTxt}>{item.text}</Text>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        height:75, 
        width:'100%',
        backgroundColor:'#003366', 
        flexDirection:'row'
    }, 
    button:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center', 
    }, 
    buttonTxt:{
        color:'#fff',
        fontSize:19
    }
}); 

export default CustomTabBar;