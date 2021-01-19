// import-area:
import React, {useState, useEffect} from 'react'; 
import {Modal} from 'react-native';
import styled from 'styled-components/native'; 

// render-area:
export default () => {
  
  const [ modalVisible, setModalVisible ] = useState(false); 

  return(
    <Page>

      <Botao 
        title='Mostrar Modal'
        onPress={()=>{setModalVisible(true)}}
      />

      <Modal 
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={()=>{setModalVisible(false)}}
      >
        <Box>
          <BoxBody>
            <Botao 
              title="Fechar"
              onPress={()=>{setModalVisible(false)}}
            />
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  ); 
}; 

// styled-area:
const Page = styled.View`
  flex:1; 
  justify-content:center; 
  align-items:center; 
  background-color:#eee; 
`; 
const Box = styled.View`
  width:100%;
  height:100%; 
  background-color:rgba(0, 0, 0, 0.5);
  justify-content:center; 
  align-items:center; 
`; 
const Botao = styled.Button``;  
const BoxBody = styled.View`
  width:90%; 
  height:200px; 
  background-color:#fff; 
  border-radius:10px;
`;  