import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Trivia Game</h1>
        <section className="questioncontainer">
          <p id="questionanswer"><span>Question:</span> What is the airspeed velocity of an unladen African swallow?</p>
          <form><input type="text" placeholder="Answer" /> <button id="answerbtn">Submit</button></form>
        </section>
        <section className="scoring">
          <section className="player player1">
            <h2>Player 1</h2>
            <p className="score">Score: 0</p>
            <div className="scorebarcontainer">
              <div className="scorebar" style={{"height": "200px"}}></div>
            </div>
            <div className="scorecontroller">
              <button className="scorebtn plus">+</button>
              <button className="scorebtn minus">–</button>
            </div>
          </section>
          <section className="player player2">
            <h2>Player 2</h2>
            <p className="score">Score: 0</p>
            <div className="scorebarcontainer">
              <div className="scorebar" style={{"height": "30px"}}></div>
            </div>
            <div className="scorecontroller">
              <button className="scorebtn plus">+</button>
              <button className="scorebtn minus">–</button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
