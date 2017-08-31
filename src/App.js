import React, { Component } from 'react';
import Player from './Player';
import QuestionContainer from './QuestionContainer';
import data from './data';
import './App.css';

/**
 * root component
 */
class App extends Component {
  constructor() {
    // ES6 class constructors have to call super if they are subclasses in order to access 'this'
    super();
    console.log(data);
    // bind all methods
    this.handleScoring = this.handleScoring.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    // determine the number of questions
    data.board.questionCount = data.questions.length;

    // set initial state
    this.state = data;
  }

/**
 * modifies a player's score up or down
 * @param  {Number} index this will be a 0 or 1 identifying which player we are dealing with
 * @param  {Number} delta this will be 1 or -1 and will increment or decrement the score
 */
  handleScoring(index=0, delta=1) {
    // make a copy of players array in state
    let playerArray = this.state.players.slice();
    // make a copy of the board object in state
    var board = Object.assign({}, this.state.board);

    // adjust the score for our player
    let newScore =  playerArray[index].score + delta;

    // don't let score drop below zero
    newScore = newScore < 0 ? 0 : newScore;

    // adjust player's score
    playerArray[index].score = newScore;

    // default to no winner
    let winningPlayer = '';

    // do we have a winner? If so, who?
    if (newScore === this.state.board.winningCount) {
      winningPlayer = 'Player ' + (index+1);
      // Don't show answer or score controllers if we have a winner
      board.showAnswer = false;
    }

    board.winningPlayer = winningPlayer;

    this.setState({
      "board": board,
      "players": playerArray
    });
  }

/**
 * Shows the answer area
 * @param  {object} event click event
 */
  handleAnswerClick(event) {
    // stop form submission
    event.preventDefault();
    // copy the existing state of the board
    var board = Object.assign({}, this.state.board);
    // show
    board.showAnswer = true;
    // update state
    this.setState({
      "board": board
    });
  }

  handleNextClick(event) {
    event.preventDefault();
    var board = Object.assign({}, this.state.board);

    let nextQuestion = board.currentQuestion + 1;
    if(nextQuestion > board.questionCount - 1) {
      nextQuestion = 0;
    }
    board.currentQuestion = nextQuestion;
    board.showAnswer = false;
    board.playerTurn = board.playerTurn === 0 ? 1 : 0;

    this.setState({
      "board": board
    });
  }

  handleResetClick() {
    const resetData = Object.assign({}, data);
    resetData.players = [
      {"name": "Player 1", "score": 0},
      {"name": "Player 2", "score": 0},
    ];
    this.setState(resetData);
  }

  render() {
    const players = this.state.players.map(function(player, index){
      return (
        <Player
          key={index}
          stats={player}
          units={this.state.board.scoreBarUnits}
          myturn={this.state.board.playerTurn === index ? true : false }
          showControls={this.state.board.showAnswer}
          handlePlusScore={()=>{ this.handleScoring(index, 1); }}
          handleMinusScore={()=>{ this.handleScoring(index, -1); }}
        />
      );
    }, this);

    const currentQuestion = this.state.questions[this.state.board.currentQuestion].question;
    const currentAnswer = this.state.questions[this.state.board.currentQuestion].answer;

    return (
      <div id="container">
        <h1>{this.state.board.title}</h1>
        { this.state.board.winningPlayer.length ? (
          <section className="winningBox">
            <h2>The winner is {this.state.board.winningPlayer}!!!</h2>
            <button className="resetbtn" onClick={this.handleResetClick}>Reset</button>
          </section>

          ) : (

          <QuestionContainer
            question={currentQuestion}
            answer={currentAnswer}
            showAnswer={this.state.board.showAnswer}
            handleNext={this.handleNextClick}
            handleAnswer={this.handleAnswerClick}
            player={this.state.board.playerTurn}
          />
          )
        }

        <section className="scoring">
          {players}
        </section>
      </div>
    );
  }
}

export default App;
