import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "../TwoPaths"
import ListItem from "../ListItem"
export default class Composer1 extends Component{
  render(){
    return(
      <View className="container">
        <View className="box">

          <View className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem 
              title="Wolfgang Amadeus Mozart"
              description="Wolfgang Amadeus Mozart was an Austrian composer who lived from 1756 to 1791. Many of his pieces are familiar to most people today, even those unaffiliated with classical music. In the months leading up to his death Mozart was in a lot of pain, commonly being bedridden, suffering from swelling, pain, and vomiting. On 5 December 1791, Mozart died from severe miliary fever. In his lifetime he composed over 600 works, many were seen as pinnacles of various kinds of classical music like symphonic, concertante, chamber, operatic, and choral music."
            />

          </View>

        </View> 
      </View>
    )
  }
}