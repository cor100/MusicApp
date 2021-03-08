import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "../TwoPaths"
import ListItem from "../ListItem"
export default class Composer7 extends Component{
  render(){
    return(
      <View className="container">
        <View className="box">

          <View className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem
              title="Johann Sebastian Bach"
              description="Johann Sebastian Bach was a German composer who lived from 1685 to 1750. Although he was orphaned at the age of 10, he was able to reside with his brother to foster his talents. Within the last decade of his life, Bach expanded his music to an older polyphonic style, among others. Bach died from a stroke approximately 4 months following an eye surgery. Bach commonly experimented with musical techniques such as counterpoint, harmonic and motivic organization, and rhythmic adaptation from places outside of Germany such as Italy."
            />

          </View>

        </View> 
      </View>
    )
  }
}