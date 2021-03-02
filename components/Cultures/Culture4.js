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
              title="Czechia"
              description="Some of the most well-known Czech pieces are Symphony No. 9, String Quartet No. 12, and Cello Concerto, all written by Antonin Dvorak. Symphony No. 9, or 'New World' is an intense work of art that is incredibly fast at times and slow at others. String Quartet No. 12, also known as 'American' is a beautiful fast-paced piece of chamber music that builds and releases intensity over the piece. Finally, Cello Concerto is a work of music that varies from intense and dramatic to light and relaxing."
            />

          </div>

        </div> 
      </div>
    )
  }
}