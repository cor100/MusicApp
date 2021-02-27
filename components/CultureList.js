import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from "./ListItem"
export default class CultureList extends Component{
  render(){
    return(
      <div>
      <Button title = "Home" onPress={() => this.props.navigation.goBack()}/>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    )
  }
}
