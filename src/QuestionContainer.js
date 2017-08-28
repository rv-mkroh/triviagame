import React, { Component } from 'react';

class QuestionContainer extends Component {
  render() {
    return (
      <section className="questioncontainer">
        <p id="questionanswer"><span>Question:</span> What is the airspeed velocity of an unladen African swallow?</p>
        <form>
          <input type="text" placeholder="Answer" />
          <button id="answerbtn">Submit</button>
        </form>
      </section>
    );
  }

}

export default QuestionContainer;