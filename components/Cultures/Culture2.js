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
              title="France"
              description="French composers also contributed lots to classical and chamber music. Some of the best French works include Requiem by Faure, Lully by Alceste, and Satie by Gnossiennes. Requiem is a dark and intense work of music that was split into several different pieces, while Lully by Alceste is a full operatic piece, and Satie is a slow and sad piano piece."
            />

          </View>

        </View> 
      </View>
    )
  }
}