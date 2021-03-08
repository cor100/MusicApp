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
              title="India"
              description="India has produced some great music that is very different from music thought up in the Western World. Some fantastic pieces are Baraso Re and Diya Jalao by Miyan Tansen, as well as Raga-Manj Khamaj by Ali Akbar Khan."
            />

          </View>

        </View> 
      </View>
    )
  }
}