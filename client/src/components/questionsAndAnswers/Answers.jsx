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
       <h3> A: </h3>
        <p>{this.props.item.body}</p>
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
