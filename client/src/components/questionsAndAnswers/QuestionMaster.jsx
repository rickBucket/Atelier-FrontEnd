/* eslint-disable */
import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import dummyData from './dummyData.js';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 3px grey solid;
`;

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
        this.setState({
          questionData: response.data,
        });
      });
  }

  render() {
    return (
      <Container>
        <h4>Question's and Answers</h4>
        <Search />
        <Questions questionData={this.state.questionData}/>
        <button className="Load-button"> Load more questions </button>
        <button className="add-Q-button"> Add a Question  + </button>
      </Container>
    );
  }
}

export default QuestionMaster;

//  text-decoration: underline;
// background: transparent;
// border: none;
// outline: none;
// cursor: pointer;
