import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  margin: 32px 16px 5px 5px;
  height: 540px;
  width: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`;
const Img = styled.img`
  box-shadow: 2px 2px 5px rgba(0,0,0,0.8);
  position: absolute;
  max-height: 540px;
  max-width: 580px;
  cursor: pointer;
`;

function PrimaryImageView({ photo, handleExpand }) {
  return (
    <Div>
      <Img src={photo} a="" onClick={handleExpand} />
    </Div>
  );
}

PrimaryImageView.defaultProps = {
  photo: '',
};

PrimaryImageView.propTypes = {
  photo: PropTypes.string,
  handleExpand: PropTypes.func.isRequired,
};

export default PrimaryImageView;
