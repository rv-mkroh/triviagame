import React, { Component } from 'react';
import ScoreController from './ScoreController';
import Scorebar from './Scorebar';

class Player extends Component {
  render() {
    return (
        <section className="player player1">
            <h2>Player 1</h2>
            <p className="score">Score: 0</p>
            <Scorebar />
            <ScoreController />
          </section>
    );
  }
}

export default Player