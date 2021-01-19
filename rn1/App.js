// import-area:
import React, { useEffect, useState } from 'react'; 
import { StatusBar } from 'react-native'; 
import styled from 'styled-components/native'; 

// render-area:
export default () => {
  
  const [ hidden, setHidden ] = useState(false); 
  useEffect(()=>{
    
  }, [])
  return(
    <Page>
      <Botao
        title="Toggle StatusBar"
        onPress={ ()=>{setHidden(!hidden)} }
      />
      <StatusBar 
        barStyle='higth-content' 
        backgroundColor='#0000ff'
        hidden={hidden}
      />
    </Page>
  ); 
}; 

// styled-ara:
const Page = styled.View`
  flex:1; 
  justify-content:center; 
  align-items:center;
  background-color:#0000ff; 
`; 
const Botao = styled.Button`
`; 