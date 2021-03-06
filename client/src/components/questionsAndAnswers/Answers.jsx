import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AnswerPhoto from './AnswerPhoto.jsx';

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

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
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
  margin-right: 5px;
  padding-top: 17.3px;
  font-weight: bold;
`;

const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

// --------------- CLASS STARTS HERE ------------- //

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    axios.put('/qa/questions', {
      answer_id: this.props.item.id,
      type: event.target.name,
    })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <AnwserDiv>
          <h3> A: </h3>
          <AnswerBody>
            { this.props.item.body }
          </AnswerBody>
        </AnwserDiv>
        <br />

        <PhotoDiv>
          {this.props.item.photos.map((photo, i) => (
            <AnswerPhoto photo={photo} key={i} />
          ))}
        </PhotoDiv>

        <Container>

          {this.props.item.answerer_name === this.props.seller
            ? (
              <p>
                by  {' '}
                <b> Seller </b>
                {' '}
                {new Date(this.props.item.date).toLocaleDateString(undefined, {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
                {' '}
              </p>
            )
            : (
              <p>
                by {' '}
                {this.props.item.answerer_name}
                {' '}
                {new Date(this.props.item.date).toLocaleDateString(undefined, {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
            )}
          <Divide className="divider"> | </Divide>
          <p> Helpful? </p>
          <Button name="helpful" onClick={(event) => { event.preventDefault(); this.handleClick(event); }}> Yes </Button>
          <p>{this.props.item.helpfulness}</p>
          <Divide className="divider"> | </Divide>
          <Button name="report" onClick={(event) => { event.preventDefault(); this.handleClick(event); }}> Report </Button>
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
