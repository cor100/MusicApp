import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import CultureList from "./components/CultureList"
import Culture1 from "./components/Cultures/Culture1"
import Culture2 from "./components/Cultures/Culture2"
import Culture3 from "./components/Cultures/Culture3"
import Culture4 from "./components/Cultures/Culture4"
import Culture5 from "./components/Cultures/Culture5"
import Culture6 from "./components/Cultures/Culture6"
import Culture7 from "./components/Cultures/Culture7"
import Culture8 from "./components/Cultures/Culture8"
import ComposerList from "./components/ComposerList"
import Composer1 from "./components/Composers/Composer1"
import Composer2 from "./components/Composers/Composer2"
import Composer3 from "./components/Composers/Composer3"
import Composer4 from "./components/Composers/Composer4"
import Composer5 from "./components/Composers/Composer5"
import Composer6 from "./components/Composers/Composer6"
import Composer7 from "./components/Composers/Composer7"
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
          <Stack.Screen name="Culture1" component={Culture1}/>
          <Stack.Screen name="Culture2" component={Culture2}/>
          <Stack.Screen name="Culture3" component={Culture3}/>
          <Stack.Screen name="Culture4" component={Culture4}/>
          <Stack.Screen name="Culture5" component={Culture5}/>
          <Stack.Screen name="Culture6" component={Culture6}/>
          <Stack.Screen name="Culture7" component={Culture7}/>
          <Stack.Screen name="Culture8" component={Culture8}/>
          <Stack.Screen name="Composers" component={ComposerList}/>
          <Stack.Screen name="Composer1" component={Composer1}/>
          <Stack.Screen name="Composer2" component={Composer2}/>
          <Stack.Screen name="Composer3" component={Composer3}/>
          <Stack.Screen name="Composer4" component={Composer4}/>
          <Stack.Screen name="Composer5" component={Composer5}/>
          <Stack.Screen name="Composer6" component={Composer6}/>
          <Stack.Screen name="Composer7" component={Composer7}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
