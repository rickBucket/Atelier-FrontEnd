/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 32px 16px 5px 5px;
  height: 540px;
  width: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`
const Img = styled.img`
  box-shadow: 2px 2px 5px rgba(0,0,0,0.8);
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
