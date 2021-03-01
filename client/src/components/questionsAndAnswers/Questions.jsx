import React from 'react';
import Question from './Question.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props.questionData.results); //data to be mapped
  }

  render() {
    return (
      <div>
        {this.props.questionData.results.map((item, i) => {
          return (
            <Question item={item} key={i} />
          )
        })}
      </div>
    );
  }
}

export default Questions;

// add answer modal
