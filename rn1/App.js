//import-area:
import React from 'react'; 
import styled from 'styled-components/native'; 

//render-area:
export default function(){
  return(
    <Page>
      <Input placeholder="Qual seu nome?" />
    </Page>
  ); 
}; 

//styled-area:

const Page = styled.View`
  flex:1; 
  background-color:#fff; 
  align-items:center; 
`; 

const Input = styled.TextInput`
  font-size:15px; 
  border:1px solid #000; 
  height:50px; 
  width:90%;
  padding:10px; 
  margin-top:20px; 
  border-radius:5px;
`; 

const Salvar = styled.Button`
`; 