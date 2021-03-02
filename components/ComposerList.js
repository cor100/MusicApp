import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from "./ListItem"
export default class ComposerList extends Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span></span>

          <div className="content">

          <h2>Composers</h2>

          <Button title = "Home" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem 
              title="Wolfgang Amadeus Mozart"
              description="Wolfgang Amadeus Mozart was an Austrian composer who lived from 1756 to 1791. Many of his pieces are familiar to most people today, even those unaffiliated with classical music. In the months leading up to his death Mozart was in a lot of pain, commonly being bedridden, suffering from swelling, pain, and vomiting. On 5 December 1791, Mozart died from severe miliary fever. In his lifetime he composed over 600 works, many were seen as pinnacles of various kinds of classical music like symphonic, concertante, chamber, operatic, and choral music."
            />
            <ListItem 
              title="Ludwig van Beethoven"
              description="Ludwig van Beethoven was a German composer who lived from 1770 to 1827. He has a vast amount of written pieces of music, many of which can be recognized by most people, one of the most famous of these is the Piano solo “Fur Elise”. During Beethoven's final years, he grew to be commonly ill and depressed.  Beethoven died on 26 March 1827 with only his friend  Anselm Huttenbrenner beside him; he died from post-hepatitic cirrhosis, extensive liver damage due to over-consumption of alcohol. One unique feature of Beethoven’s compositions was he used marked, forceful, and even stark rhythmic patterns much more than other composers of his time."
            />
            <ListItem 
              title="Pyotr Ilyich Tchaikovsky"
              description="The most famous Austrian composer was Mozart, who rocked the world of classical music with pieces like Serenade No. 13, Symphony No. 41, and Requiem. Serenade No. 13, or 'Eine Kleine Nachtmusic' is a fast and lively piece which even many who know little about chamber music have heard. Symphony No. 41, or 'Jupiter', is a work that has numerous musical ideas from fast and upbeat to slow and sad. Finally, Requiem is a fast, dark, and dramatic song that was written on Mozart's deathbed."
            />
            <ListItem 
              title="Czechia"
              description="Pyotr Ilyich Tchaikovsky was a Russian composer who lived from 1840 to 1893. One of his most recognizable works today is the swan lake finale, which many people say gives them chills whenever they listen to it. Even with all of his success Tchaikovsky suffered from many personal crises and depression throughout his life. On November 6, 1893 Tchaikovsky died from cholera. He was very creative with some of his work, using cannons in his 1812 overture."
            />
            <ListItem 
              title="Duke Ellington"
              description="Edward Kennedy 'Duke' Ellington was an African American composer who lived from 1899 to 1974. He was awarded a posthumous Pulitzer Prize Special Award for music in 1999. On May 24, 1974, Ellington died from complications from lung cancer and pneumonia. His son Mercer took over leadership of the orchestra, After Duke died, and continued until his own death in 1996. He had a mastery melody, rhythms, sonic textures, and compositional forms.
              "
            />
            <ListItem
              title="Nina Simone"
              description="Eunice Kathleen Waymon (more commonly known as Nina Simone) was a African American composer, singer, as well as civil rights activist. To make a living, she played piano at a nightclub in Atlantic City. She used the name 'Nina Simone' to disguise herself from family members, since they thought she was playing “the devil’s music”. She was suffering from breast cancer for several years before her death on April 21, 2003 in her sleep at her home in Carry-le-Rouet. She involved herself in various kinds of music such as folk, gospel, blues, classical, R&B, jazz, and pop."
            />
            <ListItem
              title="Frédéric Chopin"
              description="Frédéric François Chopin was a Polish composer who lived from 1810 to 1849. All of Chopin’s work was  written for the piano itself or the piano and other instruments. He was an innovative mind in the romantic era of classical music (approximately 1800-1910). Sadly, in 1842 Chopin started showing signs of serious illness, he died in 1849 due to tuberculosis. Chopin was the first renowned composer to devote himself uniquely to the piano."
            />
            <ListItem
              title="Johann Sebastian Bach"
              description="Johann Sebastian Bach was a German composer who lived from 1685 to 1750. Although he was orphaned at the age of 10, he was able to reside with his brother to foster his talents. Within the last decade of his life, Bach expanded his music to an older polyphonic style, among others. Bach died from a stroke approximately 4 months following an eye surgery. Bach commonly experimented with musical techniques such as counterpoint, harmonic and motivic organization, and rhythmic adaptation from places outside of Germany such as Italy."
            />
          </div>

        </div> 
      </div>
    )
  }
}