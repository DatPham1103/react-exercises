import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: Players
        };
     }
  render() {
    return <PlayersPresentation players={this.state.players}/>
  }
}
export default Main
