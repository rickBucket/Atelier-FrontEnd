/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 10px;
  padding: auto;
  margin: 4px;
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`
const Img = styled.img`
  border: 0px solid black;
  border-radius: 16px;
  margin: auto;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.7);
  position: absolute;
  max-height: 600px;
  max-width: 600px;
`

class PrimaryImageView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        <Img src={this.props.photo} a=''></Img>
      </Div>
    );
  }
}

export default PrimaryImageView;
