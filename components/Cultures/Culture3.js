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
              title="Austria"
              description="The most famous Austrian composer was Mozart, who rocked the world of classical music with pieces like Serenade No. 13, Symphony No. 41, and Requiem. Serenade No. 13, or 'Eine Kleine Nachtmusic' is a fast and lively piece which even many who know little about chamber music have heard. Symphony No. 41, or 'Jupiter', is a work that has numerous musical ideas from fast and upbeat to slow and sad. Finally, Requiem is a fast, dark, and dramatic song that was written on Mozart's deathbed."
            />

          </View>

        </View> 
      </View>
    )
  }
}