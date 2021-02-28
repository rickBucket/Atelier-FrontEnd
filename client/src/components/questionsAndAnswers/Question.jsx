import React from 'react';
import Answers from './Answers.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>Q: {this.props.item.question_body} </h3>
        <Answers />
      </div>
    )
  }
}

export default Question;

// Q: -
// A: -
// helpful question button -
//add answer button
