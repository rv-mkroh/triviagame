import React, { Component } from 'react';

class QuestionContainer extends Component {

  render() {
    return (
      <section className="questioncontainer">
        <p id="questionanswer"><span>Question for player {this.props.player + 1}:</span> {this.props.question}</p>
        { !this.props.showAnswer ? (
          <form>
            <input type="text" placeholder="Answer" />
            <button id="answerbtn" onClick={this.props.handleAnswer}>Submit</button>
          </form>
        ) : (
          <div id="answerBox">
            <p id="answer"><span>Answer:</span> <i>I have no idea.</i> <button id="nextbtn" onClick={this.props.handleNext}>Next</button></p>
            <p className="directions">Give yourself a point if you got it right. Take a point away if you got it wrong.</p>
          </div>

        )}
      </section>
    );
  }

}

export default QuestionContainer;