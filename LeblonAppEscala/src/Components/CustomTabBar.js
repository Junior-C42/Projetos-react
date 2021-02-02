import React from 'react'; 
import styled from 'styled-components/native'; 
import ProfileIcon from '../Assets/icons/profileIcon.svg'; 
import ScheduleIcon from '../Assets/icons/scheduleIcon2.svg'; 
import ConfigIcon from '../Assets/icons/configIcon.svg'; 

const CustomTabBar = ({ state, navigation }) => {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }; 

    return(
       <TabArea>
           <TabItem onPress={()=>{goTo('Profile')}} >
                <ProfileIcon style={{opacity: state.index===0?1:0.7}} width="24" height="24"/>
           </TabItem>
           <TabItemCenter onPress={()=>{goTo('HomeStack')}}>
                <ScheduleIcon width="40" height="40"/>
           </TabItemCenter>
           <TabItem onPress={()=>{goTo('Options')}}>
                <ConfigIcon style={{opacity: state.index===2?1:0.7}} width="24" height="24"/>
           </TabItem>
       </TabArea> 
    ); 
}; 

const TabArea = styled.View`
    height:60px; 
    background-color:#003366; 
    flex-direction:row; 
`; 

const TabItem = styled.TouchableOpacity`
    flex:1; 
    justify-content:center;
    align-items:center;
`; 

const TabItemCenter = styled.TouchableOpacity`
    width:70px; 
    height:70px; 
    justify-content:center;
    align-items:center;
    background-color:#fff; 
    border-radius:35px;
    border:4px solid #ddd;
    margin-top:-35px;
`; 

export default CustomTabBar; 