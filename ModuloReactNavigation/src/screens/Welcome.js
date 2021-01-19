import React from 'react'; 
import { 
    View, 
    StyleSheet, 
    Text} from 'react-native'; 

export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}> Seja vem vindo</Text>
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#333',
        justifyContent:'center', 
        alignItems:'center'
    },
    txt:{
        color:'#fff', 
        fontSize:20
    }
})