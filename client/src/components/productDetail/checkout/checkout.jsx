/* eslint-disable */
import React from 'react';
import Selectors from './selectors.jsx';
import styled from 'styled-components';

const Div = styled.div`
  border: 0px solid grey;
  border-radius: 12px;
  padding: 4px 0px 4px 0px;
  margin: 20px 12px 12px 12px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
  background: rgba(255,255,255,0.1);
`
const ButtonCheckout = styled.button`
  background: white;
  border: 0px solid grey;
  border-radius: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 80%;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
`
const ButtonFav = styled.button`
  background: white;
  border: 0px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin: 5px 12px 12px 12px;
  cursor: pointer;
  width: 20%;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.5);
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
