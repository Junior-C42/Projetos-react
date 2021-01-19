// import-area:
import React, {useState, useEffect} from 'react'; 
import {
  View, 
  StyleSheet, 
  Text, 
  Button, 
  FlatList, 
  Image, 
  ActivityIndicator } from 'react-native'; 

// render-area:
export default () => {
  
  const [loading, setLoading] = useState(true); 
  const [ movies, setMovies ] = useState([]);

  useEffect(()=>{

    const requestMovies = async () => {
      setLoading(true); 
      const req = await fetch('https://api.b7web.com.br/cinema/'); 
      const json = await req.json(); 
  
      if(json){
        setMovies(json); 
      };
      setLoading(false);  
    }

    requestMovies(); 
  },[])

  return(
    <View style={styles.container}>
      {loading &&
        <View style={styles.loadingArea}>
          <ActivityIndicator 
            size='large' 
            color='#fff'
          />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      }
      {!loading &&
        <> 
          <Text style={styles.totalMoviesText}>Total de Filmes: {movies.length} </Text>
          <FlatList
            styles={styles.list}
            data={movies}
            keyExtractor={item => item.titulo}
            renderItem={({item})=>(
              <View style={styles.movieItem}>
                <Image
                  source={{uri: item.avatar}}
                  style={styles.movieImage}
                  resizeMode='contain'
                  />
                <Text style={styles.movieTitle}> {item.titulo} </Text>
              </View>
            )}
          />
        </>
      }  
    </View>
  ); 
}

// styled-area:
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#333'
  },
  loadingArea:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },
  loadingText:{
    color:'#fff'
  },
  totalMoviesText:{
    color:'#fff',
    fontSize:18,
    textAlign:'center', 
    marginTop:10,
    marginBottom:10
  }, 
  list:{
    flex:1
  }, 
  movieItem:{
    marginBottom:30
  },
  movieImage:{
    height:500
  }, 
  movieTitle:{
    color:'#fff',
    fontSize:24,
    textAlign:'center',
    marginTop:5
  }
})