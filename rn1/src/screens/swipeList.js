// import-area:
import React, { useState } from 'react'; 
import styled from 'styled-components/native'; 
import lista from './src/components/lista'; 
import ListaItem from './src/components/ListaItem'; 
import AddItemArea from './src/components/AddItemArea';
import {v4 as uuidv4} from 'uuid'; 
import {SwipeListView} from 'react-native-swipe-list-view'; 
import ListaItemSwipe from './src/components/ListaItemSwipe'; 


// render-area:
export default () => { 

  const [ items, setItems ] = useState(lista); 

  const addNewItem = ( txt ) => {
    let newItems = [...items]; 
    newItems.push({
      id:uuidv4(), 
      task:txt, 
      done:false
    });
    setItems(newItems); 
  }; 

  const toggleDone = (index) => { 
    let newItems = [...items]; 
    newItems[index].done = !newItems[index].done; 
    setItems(newItems); 
  }; 

  const deleteItem = (index) => {

    let newItems = [...items]; 
    newItems = newItems.filter((it, i)=>i!=index); 

    setItems(newItems); 
  }; 

  return(
    <Container>
      <AddItemArea onAdd={addNewItem}/>
      <SwipeListView
        data={items}
        renderItem={({item, index})=><ListaItem onPress={()=>toggleDone(index)} data={item}/>}
        renderHiddenItem={({item, index})=><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
        leftOpenValue={50}
        disableLeftSwipe={true}


        keyExtractor={(item)=>item.id}
      />
    </Container>
  ); 
}; 


// styled-area:
const Container = styled.View`
  flex:1; 
  background-color:#fff;
`; 
const Scroll = styled.FlatList`
`; 
