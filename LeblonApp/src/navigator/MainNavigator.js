import { createStackNavigator } from 'react-navigation-stack'; 
import Welcome from '../screens/Welcome'; 
import Login from '../screens/Login'; 
import SplashScreen from '../screens/Splash'; 

const StackNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    }, 
    Login:{
        screen:Login
    },
    Splash:{
        screen:SplashScreen
    }
}, {
    initialRouteName:'Splash', 
    headerMode:'none',
    gestureEnable:true
}); 


export default StackNavigator; 