/* eslint-disable */
import React from 'react';
import Selectors from './selectors.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Button = styled.button`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        Checkout
        <Selectors />
        <Selectors />
        <Button>Add to Bag</Button>
        <Button>STAR</Button>
      </Div>
    );
  }
}

export default Checkout;
