// from https://codepen.io/crianbluff/pen/oNYwEKa
import React, {Component} from "react"
import { Button, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';


import CultureList from "./CultureList"
import "./TwoPaths.css"

export default class TwoPaths extends Component{
  render(){
  return(
    <div className="container">
	    <div className="box">
      <span></span>
		    <div className="content">
        <h2>Culture</h2>
        <Button title="Read More"
        color="transparent"
        outline=""
        onPress={() => this.props.navigation.navigate("Cultures")}/>

		    </div>

	    </div>


	  <div className="box">
		<span></span>

		<div className="content">
			<h2>
				Composers
			</h2>
      <Button title="Read More"
      color="transparent"
      onPress={() => this.props.navigation.navigate("Cultures")}>
      </Button>
		</div>
	</div>
</div>
  )
}
}
