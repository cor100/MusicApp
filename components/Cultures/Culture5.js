import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "../TwoPaths"
import ListItem from "../ListItem"
export default class Culture1 extends Component{
  render(){
    return(
      <View className="container">
        <View className="box">

          <View className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem 
              title="Russia"
              description="Russia is also responsible for some incredible pieces of classical music. Some of these pieces include Pyotr Ilyich Tchaikovsky’s 1812 Overture, Alexander Glazunov’s The Seasons, and Aram Khachaturian’ Spartacus. 1812 Overture is melodic, rich, and a little bit ominous. The Seasons is a cheerful piece filled with light tones. Spartacus is particularly unique in that it features a harp part. It is nice and relaxing."
            />

          </View>

        </View> 
      </View>
    )
  }
}