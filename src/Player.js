import React, { Component } from 'react';
import ScoreController from './ScoreController';
import Scorebar from './Scorebar';

class Player extends Component {

  render() {
    return (
        <section className="player player1">
            <h2>{this.props.stats.name}</h2>
            <p className="score">Score: {this.props.stats.score}</p>
            <Scorebar height="200px" />
            <ScoreController />
          </section>
    );
  }
}

export default Player