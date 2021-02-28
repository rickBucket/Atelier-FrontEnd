import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import dummyData from './dummyData.js';


class QuestionMaster extends React.Component {
  constructor() {
    super();
    this.state = {
      questionData: dummyData,
    };
  }

  render() {
    return (
      <div>
        <h4>Question's and Answers</h4>
        <Search />
        <Questions questionData={this.state.questionData}/>
        <button> Load more questions </button>
        <button> add a question </button>
      </div>
    );
  }
}

export default QuestionMaster;
