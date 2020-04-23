import React, { useEffect, useState } from 'react';
import { Image, FlatList, Text, View,StyleSheet, ActivityIndicator,Alert } from 'react-native';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { Container,Item, Content } from 'native-base';
import NetInfo from "@react-native-community/netinfo";




const Dasboard= ({navigation})=> {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = 'https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=d118ae72c0164f05af12a53247efcd63';
  useEffect(() => {
    
    
     NetInfo.addEventListener(state => {
     
      
        if(!state.isInternetReachable){
         
          alert("internet bağlantısını kontrol ediniz..")
        
        }
        fetchData()
});
   
  })
  
  async function fetchData() {
    
    (await fetch(url))
      .json()
      .then(res => setData(res),)
      .finally(()=>setLoading(false))
  }
  
  function remove(title){
    
    let _title=title.split('-')//silinecek olan karakter seçiyoruz...
    _title.pop()// silme işlemi yapmak için pop() metotunu kullanıyoruz
    return _title.join('-')// Silme işleminin nerye kadar olunacağını belirtiyoruz..

  }
  function remove2(date) {

    let simdi = date.split(':');
    simdi.pop()
    return simdi.join(':')
    
  }

    return (
      
    
      <Container>
      <Content>
      <ScrollView>{isLoading ?
      <ActivityIndicator size="large" color="blue" />:(
       <FlatList    
       data={data.articles}
       renderItem={({item})=>
        <TouchableHighlight onPress={()=>navigation.navigate('Detail',{url:item.url})}>
            <View style={styles.container}>
       <Image style={styles.image} source={{ uri: item.urlToImage }} />
       <View style={styles.title}>
         <Text style={styles.text}>{remove(item.title)}</Text>
         <View style={styles.source}>
           <Text>{item.source.name}</Text>
           <Text>{remove2(item.publishedAt)}</Text>
         </View>
       </View>
     </View>
         </TouchableHighlight>}
       keyExtractor={(item)=>item.title}>
       </FlatList>)}
   </ScrollView>
      </Content>
  </Container>
  );
};
export default Dasboard

const styles=StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection: 'row',
    padding: 10,
   
   
  },
  image:{
    width: 100, 
    height: 100
  },
  title:{
    flex: 1,
    paddingLeft: 10
  },
  source:{
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text:{ 
    flexWrap: 'wrap',
    fontWeight:"bold",
    fontSize:18,
    textAlign:'left' }

})