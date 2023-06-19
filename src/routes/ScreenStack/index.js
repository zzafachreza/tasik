// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { AboutIconAjjah, MateriIconAjjah, OverviewQuizAjjah } from '../../assets';
import About from '../../page/About';
import HomeScreen from '../../page/HomeScreen';
import MateriScreen from '../../page/Materi';
import AdabMembacaAlquran from '../../page/Materi/Materi 1 - Adab Membaca Alquran';
import TatacaramembacaAlquran from '../../page/Materi/Materi 1 - Tata cara membaca  Alquran';
import RonggaMulut from '../../page/Materi/Materi 2 - Al-jauf (rongga mulut)';
import Hidung from '../../page/Materi/Materi 2 - Al-khaisyum ( Hidung )';
import Lidah from '../../page/Materi/Materi 2 - Al-lisa (lidah)';
import Bibir from '../../page/Materi/Materi 2 - Asy-syafatain (bibir)';
import Tenggorokan from '../../page/Materi/Materi 2 -Al-halq';

import HalamanGhunnah from '../../page/Materi/Materi 3 - Ghunnah';
import HalamanMad from '../../page/Materi/Materi 3 - HalamanMad';
import Nunsukundantanwin from '../../page/Materi/Materi 3 - Nun sukan dan tanwin';
import Mimsukun from '../../page/Materi/mATERI 3 - Mimsukun';
import OverviewQuiz from '../../page/OverviewQuiz';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
    }}>
      <Tab.Screen name='Materi' component={MateriScreen}  options={{headerShown:false,  tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={MateriIconAjjah} style={{width:30, height:30, tintColor: focused ? '#E99D42' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:10, color: focused ? '#E99D42' : '#dedede', textAlign:'center'}}>Materi</Text>
    </View>

  )}}/>
      <Tab.Screen name='Overview Quiz' component={OverviewQuiz} options={{headerShown:false,   tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={OverviewQuizAjjah} style={{width:30, height:30, tintColor: focused ? '#E99D42' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:10, color: focused ? '#E99D42' : '#dedede', textAlign:'center'}}>Overview Quiz</Text>
    </View>

  ) }}/>
      <Tab.Screen name='About' component={About} options={{headerShown:false,   tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={AboutIconAjjah} style={{width:30, height:30, tintColor: focused ? '#E99D42' : '#dedede',}} />
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:10, color: focused ? '#E99D42' : '#dedede', textAlign:'center'}}>About</Text>
    </View>

  )}}/>
    </Tab.Navigator>
  )
}

export default function ScreenStack() {
  return (

 <Stack.Navigator>
    <Stack.Screen name='Homescreen' component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name='MateriScreen' component={MateriScreen} options={{headerShown:false}}/>
      <Stack.Screen name='OverviewQuiz' component={OverviewQuiz} options={{headerShown:false}}/>
      <Stack.Screen name='About' component={About} options={{headerShown:false}}/>
      <Stack.Screen name='AdabMembacaAlquran' component={AdabMembacaAlquran} options={{headerShown:false}}/>
      <Stack.Screen name='TatacaraMembacaAlquran' component={TatacaramembacaAlquran} options={{headerShown:false}}/>
      <Stack.Screen name='RonggaMulut' component={RonggaMulut} options={{headerShown:false}}/>
      <Stack.Screen name='Tenggorokan' component={Tenggorokan} options={{headerShown:false}}/>
      <Stack.Screen name='Lidah' component={Lidah} options={{headerShown:false}}/>
      <Stack.Screen name='Bibir' component={Bibir} options={{headerShown:false}}/>
      <Stack.Screen name='Hidung' component={Hidung} options={{headerShown:false}}/>
      <Stack.Screen name='Nunsukundantanwin' component={Nunsukundantanwin} options={{headerShown:false}}/>
      <Stack.Screen name='HalamanMimsukun' component={Mimsukun} options={{headerShown:false}}/>
      <Stack.Screen name='HalamanGhunnah' component={HalamanGhunnah} options={{headerShown:false}}/>
      <Stack.Screen name='HalamanMad' component={HalamanMad} options={{headerShown:false}}/>
         
 </Stack.Navigator>


  );
}

