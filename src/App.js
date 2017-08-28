import React, { Component } from 'react';
import Player from './Player';
import QuestionContainer from './QuestionContainer';
import './App.css';

const data = {
  "board": {
    "scoreBarContainerHeight": "200px",
    "title": "Trivia Game",
    "questionCount": 0,
    "currentQuestion": 0,
    "showAnswer": false
  },
  "questions": [
    {"question": "What is the airspeed velocity of an unladen African swallow?", "answer": "Ummm..."},
    {"question": "Question 1", "answer": "Answer 1"},
    {"question": "Question 1", "answer": "Answer 1"}
  ],
  "players": [
    {"name": "Player 1", "score": 0},
    {"name": "Player 2", "score": 3},
  ]
};

class App extends Component {
  constructor() {
    super();
    this.state = data;
    this.setState = {
      "board": {
        "questionCount": this.state.questions.length
      }
    };
  }

  render() {
    const players = this.state.players.map(function(player, index){
      return (
        <Player key={index} stats={player} />
      );
    });

    const currentQuestion = this.state.questions[this.state.board.currentQuestion].question;
    const currentAnswer = this.state.questions[this.state.board.currentQuestion].answer;

    return (
      <div id="container">
        <h1>{this.state.board.title}</h1>
        <QuestionContainer
          question={currentQuestion}
          answer={currentAnswer}
        />
        <section className="scoring">
          {players}
        </section>
      </div>
    );
  }
}

export default App;
