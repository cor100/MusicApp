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
              title="Nigeria"
              description="Many people aren’t aware of the music that Nigeria has to offer. Pieces like Obangiji and Yoruba Lament by Fela Sowande, as well as Variations for Little Ayo by Ayo Bankole will really open your eyes to music outside of Europe and Asia."
            />

          </div>

        </div> 
      </div>
    )
  }
}