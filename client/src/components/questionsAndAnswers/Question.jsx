import React from 'react';
import Answers from './Answers.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const btnStyle = {
      "text-decoration": "underline",
      "background": "transparent",
      "border": "none",
      "outline": "none",
      "cursor": "pointer",
      "float": "right",
    };

    const connect = {
      "display": "inline",
    }
    return (
      <div>
        <div style={connect}>
        <h3>Q: {this.props.item.question_body} </h3>
        <button style={btnStyle}> Add Answer </button>
        <button value={"Helpful?"} style={btnStyle}> Yes </button>
        </div>
        <Answers />
      </div>
    );
  }
}

export default Question;

// Q: -
// A: -
// helpful question button -value helpful, yes is button, {} answers.count value
// add answer button
