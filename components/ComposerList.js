import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./TwoPaths.css"
import ListItem from "./ListItem"
export default class ComposerList extends Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span></span>

          <div className="content">

          <h2>Composers</h2>

          <Button title = "Mozart" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer1")}/>

          <Button title = "Beethoven" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer2")}/>

          <Button title = "Tchaikovsky" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer3")}/>

          <Button title = "Ellington" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer4")}/>

          <Button title = "Simone" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer5")}/>

          <Button title = "Chopin" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer6")}/>

          <Button title = "Bach" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Composer7")}/>

          <p> </p>

          <Button title = "Home" 
          onPress={() => this.props.navigation.goBack()}/>

          </div>

        </div> 
      </div>
    )
  }
}