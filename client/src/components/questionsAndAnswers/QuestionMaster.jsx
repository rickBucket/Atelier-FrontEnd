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

const ButtonA = styled.button`
  height: 60px;
  width: 235px;
  background-color: white;
  padding: 10px;

  &:hover ${ButtonA} {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;

const ButtonB = styled.button`
  height: 60px;
  width: 175px;
  background-color: white;
  padding: 10px;

  &:hover ${ButtonB} {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }

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
        console.log(this.props.productID)
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
        <ButtonA className="Load-button"> <b> MORE ANSWERED QUESTIONS </b> </ButtonA>
        <ButtonB className="add-Q-button" onClick={ this.selectModal }> <b>ADD A QUESTION +</b> </ButtonB>
        <QuestionModal displayModal={this.state.modal}
        closeModal={this.selectModal}
        product_id={this.props.productID}/>
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
