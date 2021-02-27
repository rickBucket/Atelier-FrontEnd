import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';

class QuestionMaster extends React.component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>'question master is here!'</p>
        <Search />
        <Questions />
        <button> Load more questions </button>
        <button> add a question </button>
      </div>
    );
  }
}

export default QuestionMaster;
