/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 10px;
  margin: 32px -4px 0px 4px;
  height: 540px;
  width: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`
const Img = styled.img`
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.7);
  position: absolute;
  max-height: 540px;
  max-width: 580px;
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
