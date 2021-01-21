import React, { useState, useEffect } from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput, 
    Button
} from 'react-native'; 

const Welcome = ( props ) => {

    const [ nome, setNome ] = useState(''); 

    return(
        <View style={styles.container}>

            <Button 
                title='Volta para a tela de Login' 
                onPress={e=>{props.navigation.goBack()}}
            />
            
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
    }
}); 

Welcome.navigationOptions = ({navigation}) => {
    return { 
        
    }
}; 

export default Welcome; 