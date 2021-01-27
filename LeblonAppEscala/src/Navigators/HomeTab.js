import React from 'react'; 
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import HomeStack from './HomeStack'; 
import Profile from '../Screens/Perfil'; 
import Options from '../Screens/Options'; 
import CustomTabBar from '../Components/CustomTabBar'; 
import ProfileIcon from '../Assets/icons/profileIcon.svg';
import ProfileIconPress from '../Assets/icons/profileIconPress.svg';
import ScheduleIcon from '../Assets/icons/scheduleIcon.svg';
import OptionsIcon from '../Assets/icons/optionsIcon.svg';




const HomeTab = createBottomTabNavigator({
    Profile,
    HomeStack,
    Options,
},{
    tabBarComponent:(props)=>(
        <CustomTabBar
            {...props}
            items={[
                {
                    type:'regular',
                    text:'Perfil',
                    icon:<ProfileIcon width={25} height={25}/>, 
                    iconPressed:<ProfileIconPress width={25} height={25} fill="#000" />,
                    route:'Profile'
                },
                {
                    type:'big',
                    icon:<ScheduleIcon width={40} height={40} />,
                    route:'HomeStack'
                }, 
                {
                    type:'regular', 
                    text:'Opções', 
                    icon:<OptionsIcon width={25} height={25} />,
                    route:'Options'
                }
            ]}
        />
    ),
    initialRouteName:'HomeStack'
}); 

export default HomeTab; 