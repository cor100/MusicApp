// from https://codepen.io/crianbluff/pen/oNYwEKa
import React, {Component} from "react"
import { Button, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

import { styles } from "./Styles"
import CultureList from "./CultureList"
import ComposerList from "./ComposerList"
import "./TwoPaths"

export default class TwoPaths extends Component{
  render(){
  return(
    <View style={styles.Container}>
	    <View style={styles.Box}>
      <Text style={styles.Content}>
        <Text style={styles.Heading2}>Cultures</Text>
        <Button title="Read More"
        color="transparent"
        onPress={() => this.props.navigation.navigate("Cultures")}/>
		    </Text>
	    </View>


	  <View style={styles.Box}>
      <Text style={styles.Content}>
        <Text style={styles.Heading2}>Composers</Text>
        <Button title="Read More"
        color="transparent"
        onPress={() => this.props.navigation.navigate("Composers")}/>
  		</Text>
  	</View>
  </View>
  )
  }
}
