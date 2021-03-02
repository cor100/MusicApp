import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./Cultures.css"
import ListItem from "../ListItem"
export default class Culture1 extends Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span></span>

          <div className="content">

          <Button title = "Back" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem
              title="Vietnam"
              description="Another culture that many aren’t familiar with is the culture of Vietnam. Vietnam has fantastic music like Solo Flute - Phuong Vu by Nguyen Dinh Nghia, Music Ballet - Ma Vu by Ballet Music of Central Vietnam, and Ritual Music Big Orchestra - Dai Nhac by Dai Nhac Orchestra."
            />

          </div>

        </div> 
      </div>
    )
  }
}