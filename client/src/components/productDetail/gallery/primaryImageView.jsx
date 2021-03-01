/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`
const Img = styled.img`
  border: 4px solid black;
  border-radius: 12px;
  margin: 5px;
  max-height: 540px;
  max-width: 540px;
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
