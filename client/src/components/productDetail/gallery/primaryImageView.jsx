/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 4px;
`
const Img = styled.img`
  border: 0px solid black;
  border-radius: 16px;
  max-height: 600px;
  max-width: 600px;
  margin: 12px;
  cursor: pointer;
  box-shadow: 5px 5px 10px grey;
`

class PrimaryImageView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Img src={this.props.photo} a=''></Img>
    );
  }
}

export default PrimaryImageView;
