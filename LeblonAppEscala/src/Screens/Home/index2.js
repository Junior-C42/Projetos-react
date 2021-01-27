import React, {useState, useEffect} from 'react'; 
import { ContainerView, Text } from './style'
import MenuIcon from '../../Assets/icons/menuIcon.svg'; 
import styled from 'styled-components/native'; 
import HomeMonthScroll from '../../Components/HomeMonthScroll';
import HomeDaysScroll from '../../Components/HomeDaysScroll';

const Home = ( props ) => {
    
    let today = new Date(); 

    const [ selectedMonth, setSelectedMonth ] = useState(today.getMonth()); 

    return(
        <ContainerView>
            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />            
            <HomeDaysScroll/>            
            {/* <HomeDaysStatus/>             */}

            <Text>Mês: {selectedMonth}</Text>
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


    const ConfigButton = () => {
        const btnAction = () => {
            navigation.navigate('Options');
        }; 

        return (
            <ConfigButtonArea onPress={btnAction} underlayColor='transparent' >
                <MenuIcon width={25} height={25} />
            </ConfigButtonArea>
        ); 
    }; 

    return {
        title:"Sua escala da semana", 
        headerRight:<ConfigButton/>, 
        headerRightContainerStyle:{
            marginRight:10
        }
    }
}

export default Home; 
