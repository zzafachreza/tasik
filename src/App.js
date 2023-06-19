// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config';
import StackScreen from './routes/ScreenStack';
import { StatusBar } from 'react-native';


export default function App() {

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
  })

  return (

    <NavigationContainer>
      <StatusBar hidden />
      <StackScreen />
    </NavigationContainer>


  );
}

