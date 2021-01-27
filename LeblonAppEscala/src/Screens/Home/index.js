import React, {useState, useEffect} from 'react'; 
import { ContainerView, Text } from './style'
import NotifyIcon from '../../Assets/icons/notifyIcon.svg';
import MenuIcon from '../../Assets/icons/menuIcon.svg'; 
import styled from 'styled-components/native'; 
import HomeMonthScroll from '../../Components/HomeMonthScroll';
import HomeDaysScroll from '../../Components/HomeDaysScroll';

const Home = ( props ) => {
    
    const date = new Date(); 
    const [selectedDay, setSelectedDay] = useState(date.getDay())    

    return(
        <ContainerView>                    
            <HomeDaysScroll
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />  
            <Text>Dia: {selectedDay + 1}</Text>          
        </ContainerView>
    ); 
}; 

Home.navigationOptions = ({navigation}) => {

    const ConfigButtonArea = styled.TouchableHighlight`
        width:30px; 
        height:30px; 
        justify-content:center; 
        align-items:center; 
    `; 
    const NotifyButtonArea = styled.TouchableHighlight`
        width:30px; 
        height:30px; 
        justify-content:center; 
        align-items:center; 
    `; 
    const NotifyButton = () => {
        const btnAction = () => {
            
        }; 

        return (
            <NotifyButtonArea onPress={btnAction} underlayColor='transparent' >
                <NotifyIcon width={25} height={25} />
            </NotifyButtonArea>
        ); 
    }; 

    const ConfigButton = () => {
        const btnAction = () => {
            
        }; 

        return (
            <ConfigButtonArea onPress={btnAction} underlayColor='transparent' >
                <MenuIcon width={25} height={25} />
            </ConfigButtonArea>
        ); 
    }; 

    return {
        title:"Escala", 
        headerLeftContainerStyle:{
            // backgroundColor:'#000'
            marginLeft:10
        },
        headerTintColor:'#003366',
        headerTitleAlign:'center',
        headerLeft:<NotifyButton/>,
        headerRight:<ConfigButton/>, 
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

export default Home; 
