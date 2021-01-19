// import-area:
import React, {useState, useEffect} from 'react'; 
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'; 

// render-area:
export default () => {
  
  const [ title, setTitle ] = useState(''); 
  const [ body, setBody ] = useState(''); 
  
  const handleSend = async () => { 
    if(title != '' && body != ''){

      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body: JSON.stringify({
          title:title,
          body:body,
          userId:345
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }); 

      const json = await req.json(); 
      
      alert(`ADICIONADO! ID:${json.id} - ${json.title}`); 

    } else {
      alert("Preencha as informações!"); 
    }
  }; 

  return(
    <View style={styles.container}>

      <Text style={styles.inputLabel}>Título:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(t)=>{setTitle(t)}}/>

      <Text style={styles.inputLabel}>Corpo:</Text>
      <TextInput style={styles.input} value={body} onChangeText={(t)=>{setBody(t)}}/>

      <Button title="Enviar" onPress={handleSend} />

    </View>
  ); 
}; 

// styled-area:
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#333', 
    padding:15
  },
  inputLabel:{
    color:'#fff', 
    fontSize:22
  },
  input:{
    backgroundColor:'#555', 
    marginBottom:20, 
    marginTop:10, 
    borderRadius:5,
    color:'#fff', 
    padding:10, 
    fontSize:18
  }
}); 