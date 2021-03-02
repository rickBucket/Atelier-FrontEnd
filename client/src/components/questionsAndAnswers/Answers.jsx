import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 10px;
  border: 3px purple solid;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const AnwserDiv = styled.div`
  display: flex;
`;
const AnswerBody = styled.p`
  padding-top: 6px;
  padding-left: 10px;
`;

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  //when clicking on add load more answers add a total to a state integer and only show that many

  render() {
    return (
      <div>
        <AnwserDiv>
        <h3> A: </h3>
        <AnswerBody> {  this.props.item.body}</AnswerBody>
        </AnwserDiv>
        <Container>
          <p>by {this.props.item.answerer_name} {this.props.item.date}</p>
          <p> Helpful? </p>
          <Button> Yes </Button>
          <p>{this.props.item.helpfulness}</p>

       <Button> Report </Button>
       </Container>
      </div>
    )
  }
}

export default Answers;

// List of answers here -
// helpful button -
// report button -
// load more answers
