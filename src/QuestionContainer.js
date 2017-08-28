import React, { Component } from 'react';

class QuestionContainer extends Component {

  render() {
    return (
      <section className="questioncontainer">
        <p id="questionanswer"><span>Question:</span> {this.props.question}</p>
        <form>
          <input type="text" placeholder="Answer" />
          <button id="answerbtn">Submit</button>
        </form>
      </section>
    );
  }

}

export default QuestionContainer;