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
        Q: -
        A: -
        helpful question button -
        <Answers />
      </div>
    )
  }
}

export default Question;
