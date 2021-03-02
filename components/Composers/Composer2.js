import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./Composers.css"
import ListItem from "../ListItem"
export default class Composer2 extends Component{
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
              title="Ludwig van Beethoven"
              description="Ludwig van Beethoven was a German composer who lived from 1770 to 1827. He has a vast amount of written pieces of music, many of which can be recognized by most people, one of the most famous of these is the Piano solo “Fur Elise”. During Beethoven's final years, he grew to be commonly ill and depressed.  Beethoven died on 26 March 1827 with only his friend  Anselm Huttenbrenner beside him; he died from post-hepatitic cirrhosis, extensive liver damage due to over-consumption of alcohol. One unique feature of Beethoven’s compositions was he used marked, forceful, and even stark rhythmic patterns much more than other composers of his time."
            />

          </div>

        </div> 
      </div>
    )
  }
}