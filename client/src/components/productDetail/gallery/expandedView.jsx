/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: rgba(0,0,0,0.55);
  margin: -84px -8px;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px) contrast(70%);
`;
const Img = styled.img`
  border-radius: 4px;
  margin: auto;
  max-height: 920px;
  max-width: 1280px;
  cursor: pointer;
`;

function ExpandedView(props) {
  return (
    <Div onClick={props.unselectPhoto}>
      <Img src={props.photo} a=""></Img>
    </Div>
  );
}

export default ExpandedView;
