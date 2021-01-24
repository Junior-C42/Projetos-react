import React from 'react'; 
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    Button, 
    Image
} from 'react-native'; 

const Home = ( props ) => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Home</Text>   
            <Button title="Fulano de tal" onPress={()=>{props.navigation.navigate('Perfil')}}/>         
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
        fontSize:45
    }, 
    button:{
        backgroundColor:'#003366', 
        marginTop:45, 
        padding:13, 
        borderRadius:20, 
        width:120,
        justifyContent:'center', 
        alignItems:'center'
    }, 
    buttonTxt:{
        fontSize:12,
        color:'#fff', 
        fontWeight:'bold'
    }, 
    houseIcon:{
        height:30, 
        width:30
    }
}); 
 
Home.navigationOptions = ({navigation})=>{
    
    

    return {
        drawerLabel:'Inicio', 
        drawerIcon:({focused, tintColor})=>(
               <Image style={styles.houseIcon} source={focused?require('../image/home-active.png'):require('../image/home-black.png')} />
            )
        
    }
}; 

export default Home; 