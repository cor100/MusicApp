import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./Composers.css"
import ListItem from "../ListItem"
export default class Composer3 extends Component{
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
              title="Pyotr Ilyich Tchaikovsky"
              description="Pyotr Ilyich Tchaikovsky was a Russian composer who lived from 1840 to 1893. One of his most recognizable works today is the swan lake finale, which many people say gives them chills whenever they listen to it. Even with all of his success Tchaikovsky suffered from many personal crises and depression throughout his life. On November 6, 1893 Tchaikovsky died from cholera. He was very creative with some of his work, using cannons in his 1812 overture."
            />

          </div>

        </div> 
      </div>
    )
  }
}