/* eslint-disable */
import React from 'react';
import Selectors from './selectors.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
`
const ButtonCheckout = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 80%;
  box-shadow: 4px 4px 5px black;
`
const ButtonFav = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 20%;
  box-shadow: 4px 4px 5px black;
`
const FlexDiv = styled.div`
  border-radius: 8px;
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
      <div>
        <FlexDiv>
          <Selectors />
          <Selectors />
        </FlexDiv>
        <FlexDiv>
          <ButtonCheckout>Add to Bag</ButtonCheckout>
          <ButtonFav>STAR</ButtonFav>
        </FlexDiv>
      </div>
    );
  }
}

export default Checkout;
