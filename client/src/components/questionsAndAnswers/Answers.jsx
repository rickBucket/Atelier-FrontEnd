import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  /* padding: 10px;
  border: 3px purple solid; */
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

const Divide = styled.span`
  margin-left: 5px;
  margin-left: 5px;
  padding-top: 17.3px;
  font-weight: bold;
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
        <AnswerBody> { this.props.item.body }</AnswerBody>
        </AnwserDiv>

        <Container>

          {this.props.item.answerer_name === this.props.seller ?
            (<p>by <b> Seller </b> {this.props.item.date} </p>) :
            (<p>by {this.props.item.answerer_name} {this.props.item.date}</p>)}
          <Divide className="divider"> | </Divide>
          <p> Helpful? </p>
          <Button> Yes </Button>
          <p>{this.props.item.helpfulness}</p>
          <Divide className="divider"> | </Divide>
          <Button> Report </Button>
       </Container>
      </div>
    );
  }
}

export default Answers;


// {this.props.item.answerer_name === this.props.item}


// List of answers here -
// helpful button -
// report button -
// load more answers
