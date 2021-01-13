//import-area:
import React, { useState } from 'react'; 
import styled from 'styled-components/native'; 

//render-area:
export default ( props ) => {

    const [ item, setItem ] = useState(''); 

    const handleSubmit = () => {
        if( item.trim() != '' ){ 

            props.onAdd(item.trim());
            setItem('');  
        }
    }; 
    return(
        <AdditemArea>
            <AdditemInput 
                placeholder="Digite um novo item"
                value={item}
                onChangeText={(e)=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
             />
        </AdditemArea>
    ); 
}
    
//styled-area:
const AdditemArea = styled.View`
    background-color:#ccc; 
    padding:10px; 
`; 
const AdditemInput = styled.TextInput`
    background-color:#fff; 
    font-size:15px; 
    height:50px; 
    border-radius:5px; 
    padding:10px; 
`; 