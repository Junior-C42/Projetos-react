// import-area:
import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components/native'; 
import AsyncStorage from '@react-native-community/async-storage'; 

// render-area:
export default ()=>{
  
  const [ nome, setNome ] = useState('');
  const [ novoNome, setNovoNome ] = useState(''); 
  
  const handleSave = async () => {
    //usando o 'async' para poder usar funcionalidades de funções asyncronas; 
    if(novoNome != ''){
      await AsyncStorage.setItem('@nome', novoNome);
      //usando o 'await' para esperar o resultado de uma função asyncrona;
      setNome(novoNome);
      setNovoNome(''); 
    }
  }; 

  const getNome = async () => {
    const n = await AsyncStorage.getItem('@nome'); 
    //pegando um valor do AsyncStorage através do parametro 'getItem'
    setNome(n); 
  }; 

  useEffect(()=>{
    getNome(); 
  }, []); 

  return(
    <Page>
      <Input 
        placeholder="Qual o seu nome?" 
        value={novoNome} 
        onChangeText={(e)=>{setNovoNome(e)}}
      />
      <Salvar title="Salvar" onPress={handleSave} />
      
      <NameArea>
        <Nome>{nome}</Nome>
      </NameArea>
    </Page>
  ); 
}; 

// styled-area:
const Page = styled.SafeAreaView`
  flex:1; 
  align-items:center;
`; 
const Input = styled.TextInput`
  font-size:15px; 
  border:1px solid #000; 
  height:50px; 
  width:90%;
  margin-top:20px; 
`;
const Salvar = styled.Button`
  margin-top:15px; 
`; 
const NameArea = styled.View`
  padding:20px; 
  background-color:#ccc; 
  width:100%; 
`; 
const Nome = styled.Text`
  font-size:18px; 
`; 
