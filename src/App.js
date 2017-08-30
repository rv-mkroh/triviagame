import React, { Component } from 'react';
import Player from './Player';
import QuestionContainer from './QuestionContainer';
import './App.css';

const data = {
  "board": {
    "scoreBarContainerHeight": "200px",
    "scoreBarUnits": 20,
    "title": "Trivia Game",
    "questionCount": 0,
    "currentQuestion": 0,
    "showAnswer": false,
    "playerTurn": 0,
    "winningCount": 5,
    "winningPlayer": ''
  },
  "questions": [
    {"question": "What is the airspeed velocity of an unladen African swallow?", "answer": "Ummm..."},
    {"question": "What is the capital of Pennsylvania", "answer": "Harrisburg"},
    {"question": "Why did the chicken cross the road?", "answer": "To get to the other side"}
  ],
  "players": [
    {"name": "Player 1", "score": 0},
    {"name": "Player 2", "score": 0}
  ]
};

class App extends Component {
  constructor() {
    super();
    this.handleScoring = this.handleScoring.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    data.board.questionCount = data.questions.length;
    this.state = data;
  }

  handleScoring(index=0, delta=1) {
    let playerArray = this.state.players.slice();
    var board = Object.assign({}, this.state.board);

    let newScore =  playerArray[index].score + delta;
    if(newScore < 0) { newScore = 0; }

    playerArray[index].score = newScore;

    let winningPlayer = '';

    if (newScore === this.state.board.winningCount) {
      winningPlayer = 'Player ' + (index+1);
      board.showAnswer = false;
    }

    board.winningPlayer = winningPlayer;

    this.setState({
      "board": board,
      "players": playerArray
    });
  }

  handleAnswerClick(event) {
    event.preventDefault();
    var board = Object.assign({}, this.state.board);
    board.showAnswer = true;
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
