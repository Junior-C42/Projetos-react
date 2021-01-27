import { createStackNavigator } from 'react-navigation-stack'; 
import Home from '../Screens/Home'; 
import Options from '../Screens/Options'; 


const HomeStack = createStackNavigator({
    Home,
    Options,
},{
    // headerMode:'none'
}); 

export default HomeStack; 
