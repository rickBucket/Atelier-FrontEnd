/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 4px;
`
const Img = styled.img`
  border: 2px solid black;
  border-radius: 12px;
  max-height: 540px;
  max-width: 540px;
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
