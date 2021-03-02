import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./Composers.css"
import ListItem from "../ListItem"
export default class Composer5 extends Component{
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
              title="Nina Simone"
              description="Eunice Kathleen Waymon (more commonly known as Nina Simone) was a African American composer, singer, as well as civil rights activist. To make a living, she played piano at a nightclub in Atlantic City. She used the name 'Nina Simone' to disguise herself from family members, since they thought she was playing “the devil’s music”. She was suffering from breast cancer for several years before her death on April 21, 2003 in her sleep at her home in Carry-le-Rouet. She involved herself in various kinds of music such as folk, gospel, blues, classical, R&B, jazz, and pop."
            />

          </div>

        </div> 
      </div>
    )
  }
}