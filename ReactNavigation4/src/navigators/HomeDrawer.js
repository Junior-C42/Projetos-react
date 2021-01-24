import React from 'react'; 

import { Profiler } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import Home from '../screens/Home'; 
import Profile from '../screens/Perfil'; 
import CustomDrawer from '../components/CustomDrawer'

const HomeDrawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Pefil:{
        screen:Profile
    },

}, {
    contentComponent:(props)=><CustomDrawer {...props} />, 
    drawerWidth:150
}); 

export default HomeDrawer; 