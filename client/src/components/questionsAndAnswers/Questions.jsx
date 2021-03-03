import React from 'react';
import Question from './Question.jsx';
import styled from 'styled-components';

const Container = styled.div`
  margin: 3px;
  padding: 10px;
  /* border: 3px blue solid; */
`;

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        {this.props.questionData.results.map((item, i) => {
          return (
            <Question item={item} key={i} />
          )
        })}
      </Container>
    );
  }
}

export default Questions;

// add answer modal
