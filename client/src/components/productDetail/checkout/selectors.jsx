/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`

class Selectors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        Selectors

      </Div>
    );
  }
}

export default Selectors;
