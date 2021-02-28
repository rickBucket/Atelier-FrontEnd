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

    return (
      <div>
        <h3>Q: {this.props.item.question_body} </h3>
        <button style={btnStyle}> Add Answer </button>
        <Answers />
      </div>
    );
  }
}

export default Question;

// Q: -
// A: -
// helpful question button -
// add answer button
