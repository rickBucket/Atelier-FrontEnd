/* eslint-disable */
import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import dummyData from './dummyData.js';
import axios from 'axios';
import styled from 'styled-components';
import QuestionModal from './QuestionModal.jsx';

const Container = styled.div`
  padding: 10px;
  border: 3px grey solid;
`;



class QuestionMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: dummyData,
      modal: false,
    };
    this.selectModal = this.selectModal.bind(this);
  }

  componentDidMount() {
    axios.get(`qa/questions/?product_id=${this.props.productID}`)
      .then((response) => {
        this.setState({
          questionData: response.data,
        });
      });
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal
    }) // true/false toggle
  }

  render() {
    return (
      <Container>
        <h1>Question's and Answers</h1>
        <Search />
        <Questions questionData={this.state.questionData}/>
        <button className="Load-button"> Load more questions </button>
        <button className="add-Q-button" onClick={ this.selectModal }> Add a Question  + </button>
        <QuestionModal displayModal={this.state.modal}
        closeModal={this.selectModal}/>
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
