import { createStackNavigator } from 'react-navigation-stack'; 
import Login from '../screens/Login'; 
import HomeTab from './HomeTab'; 

const MainStack = createStackNavigator({
    Login:{
        screen:Login
    }, 
    HomeTab:{
        screen:HomeTab
    }
}, {
    defaultNavigationOptions:{
        headerShown:false
    }
}); 

export default MainStack; 