/* eslint-disable */
import React from 'react';
import Search from './Search.jsx';
import dummyData from './dummyData.js';
import axios from 'axios';
import styled from 'styled-components';
import QuestionModal from './QuestionModal.jsx';
import Question from './Question.jsx';

const Container = styled.div`
  padding: 10px;
  border: 3px grey solid;
`;

const ButtonA = styled.button`
  height: 60px;
  width: 235px;
  background-color: white;
  padding: 10px;

  &:hover {
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

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }

`;

const QuestionContainer = styled.div`
  margin: 3px;
  padding: 10px;
  /* border: 3px blue solid; */
  /* box-shadow: 10px 10px 8px grey; */
`;


// CLASS STARTS HERE ------------------------//


class QuestionMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      modal: false,
      itemsToShow: 2,
      expanded: false,
      showAll: false,
    };
    this.selectModal = this.selectModal.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  componentDidMount() {
    axios.get(`qa/questions/?product_id=${this.props.productID}`)
      .then((response) => {
        console.log('state has been set')
        this.setState({
          questionData: response.data.results,
          showAll: true,
        });
      });
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal
    }) // true/false toggle
  }

  showMore() {
    this.state.itemsToShow === 2 ? (
      this.setState({
        itemsToShow: this.state.questionData.length,
        expanded: true,
      })
    ) : (
      this.setState({
        itemsToShow: 2,
        expanded: false,
      })
    )
  }

  render() {
    // if (this.state.showAll) {
    return (
      <Container>
        <h1>Question's and Answers</h1>
        <Search />

        <QuestionContainer>
        {this.state.questionData.slice(0, this.state.itemsToShow).map((item, i) => {
          return (
            <Question item={item} key={this.state.questionData.question_id} />
          )
        })}
        </QuestionContainer>

        {this.state.questionData.length > 1 && !(this.state.expanded) ? (
          <ButtonA className="Load-button" onClick={this.showMore} > <b> MORE ANSWERED QUESTIONS </b> </ButtonA>
        ) : (
          <ButtonA className="Load-button" onClick={this.showMore} > <b> COLLAPSE QUESTIONS </b> </ButtonA>
        )}


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
