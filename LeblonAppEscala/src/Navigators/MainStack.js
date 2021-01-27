import { createStackNavigator } from 'react-navigation-stack'; 
import SplashScreen from '../Screens/SplashScreen'; 
import Started from '../Screens/Started';
import Login from '../Screens/Login';
import HomeTab from './HomeTab'; 

const MainStack = createStackNavigator({
    SplashScreen,
    Started, 
    Login,
    HomeTab,
}, {
    headerMode:'none'
}); 

export default MainStack; 
 