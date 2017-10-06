import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScoreController from './ScoreController';
import Scorebar from './Scorebar';

class Player extends Component {

  render() {

    let score = (this.props.stats.score * this.props.units);
    if(score === 0) { score = 1; }
    score += 'px';

    return (
        <section className="player player1">
            <h2>{this.props.stats.name}</h2>
            <p className="score">Score: {this.props.stats.score}</p>
            <Scorebar height={score} />

            { this.props.myturn && this.props.showControls &&
            <ScoreController plus={this.props.handlePlusScore} minus={this.props.handleMinusScore} />
            }

        </section>
    );
  }
}

Player.propTypes = {
  stats: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number
  }),
  myturn: PropTypes.bool,
  showControls: PropTypes.bool,
  units: PropTypes.number,
  handlePlusScore: PropTypes.func,
  handleMinusScore: PropTypes.func,
};

export default Player