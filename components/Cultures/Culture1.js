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
              title="Germany"
              description="Germany has produced some of the most well-known chamber music ever created. Ever since the 1700s, masterpieces like O Fortuna, Symphony No. 3, and Cantata No. 21 were created in Germany. O Fortuna is a very dramatic, suspenseful piece written by composer Carl Orff. Symphony No. 3 is one of Beethoven's, a prolific German composer, best works, being a long piece with different musical ideas ranging from dramatic and intense to light an airy player with a multitude of different instruments. Cantata No. 21 is a delightful piece of chamber music which is both light and dramatic, but all the more powerful."
            />

          </View>

        </View> 
      </View>
    )
  }
}