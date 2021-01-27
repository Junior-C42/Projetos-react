import React, { useState, useEffect, useRef } from 'react'; 
import { Dimensions } from 'react-native'; 
import styled from 'styled-components/native'; 


let days = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ];


const HomeDaysScroll = ( props ) => {
   

    const [selectedDay, setSelectedDay] = useState(props.selectedDay)

    useEffect(() => {
        props.setSelectedDay(selectedDay)
    }, [selectedDay])

    return (
        <WeekDaysArea>
            {days.map((d, k)=>(
                <WeekDays key={k} underlayColor="transparent" onPress={()=>setSelectedDay(k)} style={k==selectedDay?{
                    backgroundColor:'#003366'
                }:{}} >
                    <WeekDaysText style={k==selectedDay?{
                        color:'#fff'
                    }:{
                        color:'grey'
                    }}>{d}</WeekDaysText>
                </WeekDays>
            ))}
        </WeekDaysArea>
    ); 
}; 

const WeekDaysArea = styled.View`
    width:100%;
    /* background-color:black; */
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:10px;
   
`;
const WeekDays = styled.TouchableHighlight`
    flex:1;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    height:30px; 
    width:100%;
    padding:5px;
    margin-left:5px; 
    margin-right:5px;
`; 
const WeekDaysText = styled.Text`
    font-size:15px; 
    color:grey; 
`; 

export default HomeDaysScroll; 