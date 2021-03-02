import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from "./ListItem"
export default class CultureList extends Component{
  render(){
    return(
      <div className="container">
        <div className="box">
          <span></span>

          <div className="content">

          <h2>Culture</h2>

          <Button title = "Home" 
          color="transparent"
          onPress={() => this.props.navigation.goBack()}/>
            <ListItem 
              title="Germany"
              description="Germany has produced some of the most well-known chamber music ever created. Ever since the 1700s, masterpieces like O Fortuna, Symphony No. 3, and Cantata No. 21 were created in Germany. O Fortuna is a very dramatic, suspenseful piece written by composer Carl Orff. Symphony No. 3 is one of Beethoven's, a prolific German composer, best works, being a long piece with different musical ideas ranging from dramatic and intense to light an airy player with a multitude of different instruments. Cantata No. 21 is a delightful piece of chamber music which is both light and dramatic, but all the more powerful."
            />
            <ListItem 
              title="France"
              description="French composers also contributed lots to classical and chamber music. Some of the best French works include Requiem by Faure, Lully by Alceste, and Satie by Gnossiennes. Requiem is a dark and intense work of music that was split into several different pieces, while Lully by Alceste is a full operatic piece, and Satie is a slow and sad piano piece."
            />
            <ListItem 
              title="Austria"
              description="The most famous Austrian composer was Mozart, who rocked the world of classical music with pieces like Serenade No. 13, Symphony No. 41, and Requiem. Serenade No. 13, or 'Eine Kleine Nachtmusic' is a fast and lively piece which even many who know little about chamber music have heard. Symphony No. 41, or 'Jupiter', is a work that has numerous musical ideas from fast and upbeat to slow and sad. Finally, Requiem is a fast, dark, and dramatic song that was written on Mozart's deathbed."
            />
            <ListItem 
              title="Czechia"
              description="Some of the most well-known Czech pieces are Symphony No. 9, String Quartet No. 12, and Cello Concerto, all written by Antonin Dvorak. Symphony No. 9, or 'New World' is an intense work of art that is incredibly fast at times and slow at others. String Quartet No. 12, also known as 'American' is a beautiful fast-paced piece of chamber music that builds and releases intensity over the piece. Finally, Cello Concerto is a work of music that varies from intense and dramatic to light and relaxing."
            />
            <ListItem 
              title="Russia"
              description="Russia is also responsible for some incredible pieces of classical music. Some of these pieces include Pyotr Ilyich Tchaikovsky’s 1812 Overture, Alexander Glazunov’s The Seasons, and Aram Khachaturian’ Spartacus. 1812 Overture is melodic, rich, and a little bit ominous. The Seasons is a cheerful piece filled with light tones. Spartacus is particularly unique in that it features a harp part. It is nice and relaxing."
            />
            <ListItem
              title="India"
              description="India has produced some great music that is very different from music thought up in the Western World. Some fantastic pieces are Baraso Re and Diya Jalao by Miyan Tansen, as well as Raga-Manj Khamaj by Ali Akbar Khan."
            />
            <ListItem
              title="Nigeria"
              description="Many people aren’t aware of the music that Nigeria has to offer. Pieces like Obangiji and Yoruba Lament by Fela Sowande, as well as Variations for Little Ayo by Ayo Bankole will really open your eyes to music outside of Europe and Asia."
            />
            <ListItem
              title="Vietnam"
              description="Another culture that many aren’t familiar with is the culture of Vietnam. Vietnam has fantastic music like Solo Flute - Phuong Vu by Nguyen Dinh Nghia, Music Ballet - Ma Vu by Ballet Music of Central Vietnam, and Ritual Music Big Orchestra - Dai Nhac by Dai Nhac Orchestra."
            />
          </div>

        </div> 
      </div>
    )
  }
}