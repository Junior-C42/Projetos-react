// import-area:
import React, {useState} from 'react'; 
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  Button } from 'react-native'; 

// render-area:
export default () => {
  
  const [ email, setEmail ] = useState(''); 
  const [ password, setPassword ] = useState(''); 

  const [ status, setStatus] = useState(''); 
  const [ showCupom, setShowCupom ] = useState(false); 

  const handleVerifyLogin = async () => {
    setStatus(''); 
    setShowCupom(false); 

    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method:'POST', 
      body:JSON.stringify({email, password}),
      headers:{
        'Content-Type':'application/json'
      }
    }); 
    const json = await req.json(); 

    if(json.status == 'ok'){
      setStatus('Acesso LIBERADO!'); 
      setShowCupom(true); 
    } else { 
      setStatus('Acesso NEGADO!'); 
      setShowCupom(false); 
    }
  }; 

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Desconto UltraBlaster</Text>
      

      <TextInput 
        placeholder="Digite seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={(t)=>{setEmail(t)}}
      />
      
      <TextInput 
        placeholder="Digite sua senha"
        style={styles.input}
        value={password}
        onChangeText={(t)=>{setPassword(t)}}
        secureTextEntry={true}
      />

      <Button 
        title="Verificar"
        onPress={handleVerifyLogin}
      />

      <Text style={styles.status}>{status}</Text>

      {showCupom &&
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle} >Código de Cupom:</Text>
          <Text style={styles.cupomCode}>JAHRK123</Text>
        </View>
      }
    </View>
  );  
}; 

// styled-area:
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#333', 
    padding:20
  },
  header:{
    color:'#fff', 
    fontSize:25,
    textAlign:'center', 
    marginBottom:30
  }, 
  input:{
    height:45,
    fontSize:18,
    color:'#fff', 
    backgroundColor:'#555', 
    borderRadius:5,
    marginBottom:20,
    paddingLeft:10, 
    paddingRight:10
  }, 
  status:{
    margin:50,
    color:'#fff', 
    fontSize:18, 
    textAlign:'center'
  }, 
  cupomArea:{
    backgroundColor:'#fff', 
    borderRadius:5, 
    padding:30
  }, 
  cupomTitle:{
    fontSize:18, 
    textAlign:'center', 
    marginBottom:20
  }, 
  cupomCode:{
    textAlign:'center', 
    fontSize:40, 
    fontWeight:'bold'
  }
}); 