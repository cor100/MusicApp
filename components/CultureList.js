import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./TwoPaths.css"
import ListItem from "./ListItem"
export default class CultureList extends Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span></span>

          <div className="content">

          <h2>Cultures</h2>

          <Button title = "Germany" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture1")}/>

          <Button title = "France" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture2")}/>

          <Button title = "Austria" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture3")}/>

          <Button title = "Czechia" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture4")}/>

          <Button title = "Russia" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture5")}/>

          <Button title = "India" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture6")}/>

          <Button title = "Nigeria" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture7")}/>

          <Button title = "Vietnam" 
          color="transparent"
          onPress={() => this.props.navigation.navigate("Culture8")}/>

          <p> </p>
          
          <Button title = "Home" 
          onPress={() => this.props.navigation.goBack()}/>

          </div>

        </div> 
      </div>
    )
  }
}