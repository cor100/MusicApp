import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


import CultureList from "./components/CultureList"
import ComposerList from "./components/ComposerList"
import TwoPaths from "./components/TwoPaths.js"

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          navigationOptions={{
            headerStyle: {borderBottomWidth: 0}
          }}>
          <Stack.Screen name="Home" component={TwoPaths}
            options={{
            cardStyle: {backgroundColor: "white"},
            headerStyle: {backgroundColor: "white", borderBottomWidth: 0}
          }}/>
          <Stack.Screen name="Cultures" component={CultureList}/>
          <Stack.Screen name="Composers" component={ComposerList}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
