import React from 'react'; 
import { View, StyleSheet, Text } from 'react-native'; 
import { Agenda } from 'react-native-calendars'; 
import ItemDay from './src/components/ItemDay'; 
const App = () => {

  const items = {}; 

  return(
    <View style={{flex:1, backgroundColor:'#000'}} >
      <Agenda
        items={{ 
          '2021-01-24' : [ { name : 'item 1 - any js object' } ] , 
          ' 2021-01-25 ' : [ { name : ' item 2 - any js object '  } ] , 
          ' 2021-01-26 ' : [] , 
          '2021-01-27' : [ { name : 'item 3 - any js object' } ,  { name : 'any js object' } ] 
        } }
        loadItemsForMonth={(month)=>{console.log(month.day)}}
        hideKnob={true}
        selected="2021-01-28"
        minDate={'2021-01-24'}
        maxDate={'2021-02-04'}
        renderDay={(day, item)=>{return(<ItemDay/>)}}
        renderEmptyDate={()=>{return(<View/>)}}
        renderEmptyData = {() => {return (<ItemDay empty={true} />);}}
        theme={{textDayStyle}}
      />
    </View>
  ); 
}; 

export default App; 