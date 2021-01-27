import React from 'react'; 
import styled from 'styled-components/native'; 


const CustomTabBar = ( props ) => {

    return(
        <TabBarArea>
            {props.items.map(item=>(
                <TabBarItem key={item.route} >

                    {item.type == 'regular' &&
                        <TabRegular underlayColor="transparent" onPress={()=>{props.navigation.navigate(item.route)}      
                        }>
                            <>
                                <TabIconView>{item.icon}</TabIconView>
                                <Text>{item.text}</Text>
                            </>
                        </TabRegular>
                    }

                    {item.type == 'big' &&
                        <TabIconArea underlayColor='#003366' onPress={()=>props.navigation.navigate(item.route)}>
                            <TabIcon>{item.icon}</TabIcon>
                        </TabIconArea>
                    }

                </TabBarItem>
            ))}
        </TabBarArea>
    ); 
}; 

const TabBarArea = styled.SafeAreaView`
    flex-direction:row; 
    background-color:#003366; 
`; 
const TabBarItem = styled.View`
    flex:1; 
    height:65px; 
    align-items:center;

`; 
const TabRegular = styled.TouchableHighlight`
    align-items:center;
`;

const TabIconArea = styled.TouchableHighlight`
    width:70px; 
    height:70px; 
    background-color:#003366; 
    border-radius:55px; 
    justify-content:center; 
    align-items:center;
    border:4px solid #fff; 
    margin-top:-40px; 
`; 
const TabIcon = styled.View`
    
`;  
const Text = styled.Text`
    /* font-weight:bold;  */
    color:#fff;
`; 
const TabIconView = styled.View`
    margin-top:10px; 
    margin-bottom:5px; 
`; 


export default CustomTabBar; 