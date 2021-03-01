/* eslint-disable */
import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import dummyData from './dummyData.js';
import axios from 'axios';

class QuestionMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: dummyData,
    };
  }

  componentDidMount() {
    axios.get(`qa/questions/?product_id=${this.props.productID}`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          questionData: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <h4>Question's and Answers</h4>
        <Search />
        <Questions questionData={this.state.questionData}/>
        <button className="Load-button"> Load more questions </button>
        <button className="add-Q-button"> Add a Question  + </button>
      </div>
    );
  }
}

export default QuestionMaster;

//  text-decoration: underline;
// background: transparent;
// border: none;
// outline: none;
// cursor: pointer;
