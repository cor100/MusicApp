import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "./TwoPaths"
import { styles } from "./Styles"
import ListItem from "./ListItem"
export default class ComposerList extends Component{
  render(){
    return(
      <View style={styles.Container}>
        <View style={styles.Box}>
          <Text style={styles.Content}>

          <Text style={styles.Heading2}>Composers</Text>

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

          <Text> </Text>

          <Button title = "Home" 
          onPress={() => this.props.navigation.goBack()}/>

          </Text>
        </View> 
      </View>
    )
  }
}