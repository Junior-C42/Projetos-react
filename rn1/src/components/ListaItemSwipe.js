//import-area:
import React from 'react'; 
import styled from 'styled-components/native'; 

//render-area:
export default (props) => {
    return(

        <ListaItemSwipe onPress={props.onDelete} underlayColor='#ddd' >
            <ListaItemIcon></ListaItemIcon>
        </ListaItemSwipe>
    ); 
}; 

//styled-area:

const ListaItemSwipe = styled.TouchableHighlight`
    width:100%; 
    height:50px; 
    background-color:transparent; 
    justify-content:center;
`; 

const ListaItemIcon = styled.View`
    width:20px; 
    height:20px; 
    background-color:#ccc;
    margin-left:15px; 
`; 