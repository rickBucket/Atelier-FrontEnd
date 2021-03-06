/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: rgba(0,0,0,0.55);
  margin: -55px -15px;
  height: 100%;
  width: 99.95%;
  position: absolute;
  z-index: 50;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px) contrast(70%);
`
const Img = styled.img`
  border-radius: 4px;
  margin: auto;
  max-height: 920px;
  max-width: 1280px;
  cursor: pointer;
`

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Div onClick={this.props.unselectPhoto}>
        <Img src={this.props.photo} a=""></Img>
      </Div>
    );
  }
}

export default ExpandedView;
