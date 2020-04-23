import 'react-native-gesture-handler';
import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import Dasboard from  './src/Dasboard'
import Teknoloji from './src/Teknoloji'
import Spor from './src/Spor'
import Bilim from './src/Bilim'
import Detail from './src/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

function App(){
  
  return (

   <Navigation/>
 

  )
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()



const MyTabs=()=> {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        labelStyle:{
          marginBottom:10,
          fontWeight:'bold',
          fontSize:13,
          color:'black',
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
     
     
    >
      <Tab.Screen
        name="Dasboard"
        component={Dasboard}
        options={{
          tabBarLabel: 'Ana Sayfa',
          tabBarIcon: ({ color, size ,name}) => (
           <Image source={require("./src/image/home.png")} style={{width:20,height:20}} />
           
          ),
          
        }}/>
      <Tab.Screen 
      name="Spor" 
      component={Spor}
      options={{
        tabBarLabel: 'Spor',
        tabBarIcon: ({ color, size ,name}) => (
         <Image source={require("./src/image/sports.png")} style={{width:20,height:20}} />
         
        ),
        
      }} />
      <Tab.Screen 
      name="Teknoloji" 
      component={Teknoloji}
      options={{
        tabBarLabel: 'Teknoloji',
        tabBarIcon: ({ color, size ,name}) => (
         <Image source={require("./src/image/tecnolgy.png")}  style={{width:20, height:20}}/>
         
        ),
        
      }} />
      <Tab.Screen 
      name="Bilim" 
      component={Bilim} 
      options={{
        tabBarLabel: 'Bilim',
        tabBarIcon: ({ color, size ,name}) => (
         <Image source={require("./src/image/science.png")} style={{width:20, height:20}} />
         
        ),
        
      }}/>
    </Tab.Navigator>
  );
}
function Navigation(){
  return(
  <NavigationContainer initialRouteName='Dasboard'>
    <Stack.Navigator
      headerMode="screen"
       screenOptions={{
       headerTintColor: 'white',
       headerStyle: { backgroundColor: 'tomato' },
     }}>
      <Stack.Screen name="News" component={MyTabs}
      options={{headerTitleAlign:"center"}}/>
      <Stack.Screen name="Dasboard" component={Dasboard}/>
      <Stack.Screen name="Detail" component={Detail} />
     
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

export default App

const styles=StyleSheet.create({

  image:
  {
     width:16,
     height:16
  }
});