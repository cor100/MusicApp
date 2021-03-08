import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "../TwoPaths"
import ListItem from "../ListItem"
export default class Composer4 extends Component{
  render(){
    return(
      <View className="container">
        <View className="box">

          <View className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem 
              title="Duke Ellington"
              description="Edward Kennedy 'Duke' Ellington was an African American composer who lived from 1899 to 1974. He was awarded a posthumous Pulitzer Prize Special Award for music in 1999. On May 24, 1974, Ellington died from complications from lung cancer and pneumonia. His son Mercer took over leadership of the orchestra, After Duke died, and continued until his own death in 1996. He had a mastery melody, rhythms, sonic textures, and compositional forms."
            />

          </View>

        </View> 
      </View>
    )
  }
}