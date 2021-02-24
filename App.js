import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';


import CultureList from "./components/CultureList"
import TwoPaths from "./components/TwoPaths"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Options"
          component={TwoPaths}
        />
        <Stack.Screen
          name="Cultures"
          component={CultureList}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
