/* eslint-disable */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalContent from './styledComponents/modalContent.js';
import ModalWrapper from './styledComponents/modalWrapper.js';
import ComparisonTitle from './styledComponents/comparisonTitle.js';
import CompareWrapper from './styledComponents/compareWrapper.js';

const ComparisonModal = (props) => {
  const closeModal = (event) => {
    event.stopPropagation();
    props.closeModal()
  }

  return (
     <ModalWrapper className="modal"
     onClick={ closeModal }>
       <div className="modal-content" onClick={ e => e.stopPropagation() }>
          <CloseButton className="close" onClick={ closeModal }>&times; </CloseButton>
       </div>
       <ModalContent>
       <ComparisonTitle>
          <CompareTitle>COMPARING</CompareTitle>
          <div>{null}</div>
          <div>{null}</div>
          <ProductTitle><b>{props.parentProduct}</b></ProductTitle>
          <div>{null}</div>
          <ProductTitle><b>{props.compareProduct}</b></ProductTitle>
       </ComparisonTitle>
       <CompareWrapper>
          {props.combinedFeatures.map((feature, i) => <TestDiv key={i}>{feature}</TestDiv>)}
      </CompareWrapper>
      </ModalContent>
     </ModalWrapper>
  );
}

const CloseButton = styled.span`
  color: #aaaaaa;
  position: relative;
  float: right; /* Positioned to the right of the parent container whichever size it is */
  font-size: 25px;
  font-weight: bold;
`;

const TestDiv = styled.div`
  border: 2px solid blue;
`;
const ProductTitle = styled.div`
  margin: 5px 4px 0px 1px;
  border: 2px solid blue;
`;

const CompareTitle = styled.div`
  margin: 4px 5px;
  font-size: 15px;
  border: 2px solid blue;
`;

export default ComparisonModal;