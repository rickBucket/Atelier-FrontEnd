import React from 'react';
import Question from './Question.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props.questionData); //data to be mapped
  }

  render() {
    return (
      <div>
        <>
        add answer modal -
        </>
        map questions here in question
        <Question />
      </div>
    );
  }
}

export default Questions;
