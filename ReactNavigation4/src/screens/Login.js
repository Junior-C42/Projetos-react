import React from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableHighlight} from 'react-native'; 

const Login = ( props ) => {
    return(
        <View style={styles.container}>

           <View style={styles.containerTxt}>
               <Text style={styles.txt}>LOGIN SCREEN</Text>
           </View>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#003355"
                onPress={ ()=> props.navigation.navigate('Welcome') }
                style={styles.button}
            >
                <Text style={styles.buttonTxt}>Login</Text>
            </TouchableHighlight>

        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerTxt:{
        flex:1,
        width:'100%',
        justifyContent:'center', 
        alignItems:'center'
    }, 
    txt:{
        fontSize:22,
        marginTop:20
    },
    button:{
        backgroundColor:"#003366",
        padding:20,
        borderRadius:50, 
        width:'80%', 
        justifyContent:'center', 
        alignItems:'center',
        marginTop:10,
        marginBottom:20
    }, 
    buttonTxt:{
        color:'#fff', 
        fontWeight:'bold', 
        fontSize:15,
        textTransform:'uppercase'
    }
}); 

Login.navigationOptions = () => {
    return {
       title:'Fazer Login',
    };
}; 

export default Login; 