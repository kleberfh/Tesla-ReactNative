import React from "react";
import 'react-native-reanimated'
import { LogBox } from 'react-native';
import {StatusBar} from "react-native";
import Router from "./components/router/router";
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  LogBox.ignoreAllLogs();

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };

  return (
    <NativeBaseProvider config={config}>
      <StatusBar />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
