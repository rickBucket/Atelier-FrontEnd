/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  border: 0px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin: 12px 12px 5px 12px;
  width: 50%;
  cursor: pointer;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
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
