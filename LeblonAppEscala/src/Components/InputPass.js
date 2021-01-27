import React from 'react'; 
import styled from 'styled-components/native'; 
import LockIcon from '../Assets/icons/lockIcon.svg'; 

const InputPass = ( props ) => {

    return(
        <InputArea>
            <LockIcon/>
            <InputContent 
                placeholder="Password" 
                secureTextEntry={true}
                value={props.value}
                onChangeText={props.onChangeText}
            />        
        </InputArea>
    ); 
}; 

const InputArea = styled.View`
    padding-left:20px; 
    padding-right:10px; 
    padding-top:4px; 
    padding-bottom:4px;
    background-color:#fff; 
    justify-content:center;
    align-items:center; 
    flex-direction:row;
    border-radius:10px; 
    margin-bottom:5px;
`; 

const InputContent = styled.TextInput`
    flex:1; 
    margin-left:10px;
    font-size:18px; 
`; 

export default InputPass;