import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from "./ListItem"
export default class CultureList extends Component{
  render(){
    return(
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    )
  }
}
