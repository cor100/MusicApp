import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "../TwoPaths"
import ListItem from "../ListItem"
export default class Composer6 extends Component{
  render(){
    return(
      <View className="container">
        <View className="box">

          <View className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem
              title="Frédéric Chopin"
              description="Frédéric François Chopin was a Polish composer who lived from 1810 to 1849. All of Chopin’s work was  written for the piano itself or the piano and other instruments. He was an innovative mind in the romantic era of classical music (approximately 1800-1910). Sadly, in 1842 Chopin started showing signs of serious illness, he died in 1849 due to tuberculosis. Chopin was the first renowned composer to devote himself uniquely to the piano."
            />

          </View>

        </View> 
      </View>
    )
  }
}