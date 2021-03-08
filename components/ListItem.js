import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import { styles } from "./Styles"

function ListItem(props) {
  return(
    <Text>
      <Text style={styles.Paragraph}>
        <Text style={styles.Heading2}>{props.title}</Text>{props.description}
      </Text>
    </Text>
  )
}
export default ListItem