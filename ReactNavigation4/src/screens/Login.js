import React from 'react'; 
import TabBarIcon from '../components/TabBarIcon'; 
import { 
    View, 
    Text, 
    StyleSheet,
    Button
} from 'react-native'; 
import { StackActions, NavigationActions } from 'react-navigation'

const Login = ( props ) => {

    const handleLogin = () => {
        
        const resetAction = StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeTab'})
            ]
        });

        props.navigation.dispatch(resetAction);         
    }; 

    return(
        <View style={styles.container}>

            <View style={styles.containerTxt}>
               <Text style={styles.txt}>LOGIN SCREEN</Text>
                <Button title="Fazer Login" onPress={handleLogin}/>        
            </View>
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
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
    }
}); 

Login.navigationOptions = () => {
    return {
       title:'Login'
    };
}; 

export default Login; 