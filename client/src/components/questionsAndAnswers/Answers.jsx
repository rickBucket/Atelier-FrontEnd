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
    this.click = this.click.bind(this);
  }

  click(event) {
    console.log(this.props.item);
    if (event.target.name === 'yes') {
      if (!this.state.clickedYes) {
        axios.put('/qa/questions', {
          question_id: this.props.item.question_id,
          yes: 'yes',
          question_helpfulness: this.props.item.answer_helpfulness,
        })
          .then((response) => {
            console.log(reponse);
            this.setState({
              clickedYes: true,
            });
          });
      }
    } else if (!this.state.clickedReport) {
      axios.put('/qa/questions/', {
        question_id: this.props.item.question_id,
        report: 'report',

      })
        .then((response) => {
          console.log(reponse);
          this.setState({
            clickedReport: true,
          });
        });
    }
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
                by
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
                by
                {this.props.item.answerer_name}
                {' '}
                {new Date(this.props.item.date).toLocaleDateString(undefined, {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
            )}
          <Divide className="divider"> | </Divide>
          <p> Helpful? </p>
          <Button name="yes" onClick={(event) => { event.preventDefault(); this.click(event); }}> Yes </Button>
          <p>{this.props.item.helpfulness}</p>
          <Divide className="divider"> | </Divide>
          <Button name="report" onClick={(event) => { event.preventDefault(); this.click(event); }}> Report </Button>
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
