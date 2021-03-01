/* eslint-disable */
import React from 'react';
import Selectors from './selectors.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const ButtonCheckout = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  width: 70%;
`
const ButtonFav = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  width: 30%;
`
const FlexDiv = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
`

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        <FlexDiv>
          <Selectors />
          <Selectors />
        </FlexDiv>
        <FlexDiv>
          <ButtonCheckout>Add to Bag</ButtonCheckout>
          <ButtonFav>STAR</ButtonFav>
        </FlexDiv>
      </Div>
    );
  }
}

export default Checkout;
