import React, { Component } from 'react';
import Player from './Player';
import QuestionContainer from './QuestionContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Trivia Game</h1>
        <QuestionContainer />
        <section className="scoring">
          <Player />
          <Player />
        </section>
      </div>
    );
  }
}

export default App;
